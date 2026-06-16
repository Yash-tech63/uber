# User Registration API

## POST /users/register

Registers a new user and returns an authentication token with the created user details.

### Request Body

Content-Type: `application/json`

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Field Requirements

- `fullname` (object)
  - `firstname` (string): required, at least 3 characters
  - `lastname` (string): optional, but should be provided as part of the name object
- `email` (string): required, must be a valid email address
- `password` (string): required, must be at least 6 characters

### Success Response

- Status: `201 Created`
- Body:
  - `token` (string): authentication token for the created user
  - `user` (object): created user data

#### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "$2b$10$eW91clBhc3N3b3JkSGFzaEhlcmU=",
    "_id": "64fbe12345abcdef67890123",
    "createdAt": "2026-06-12T00:00:00.000Z",
    "updatedAt": "2026-06-12T00:00:00.000Z"
  }
}
```

### Error Responses

- `400 Bad Request`
  - validation failed for the request body
  - returned when required fields are missing or invalid
- `500 Internal Server Error`
  - returned when an unexpected server error occurs during registration

### Notes

- The endpoint uses `express-validator` to validate incoming request data.
- Passwords are hashed before the user is saved.

---

## POST /users/login

Authenticates a user with email and password and returns an authentication token when credentials are valid.

### Request Body

Content-Type: `application/json`

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

### Field Requirements

- `email` (string): required, must be a valid email address
- `password` (string): required, must be at least 6 characters

### Success Response

- Status: `200 OK`
- Body:
  - `token` (string): authentication token for the user
  - `user` (object): authenticated user data

#### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "64fbe12345abcdef67890123",
    "createdAt": "2026-06-12T00:00:00.000Z",
    "updatedAt": "2026-06-12T00:00:00.000Z"
  }
}
```

### Error Responses

- `400 Bad Request`
  - returned when required fields are missing or invalid
- `401 Unauthorized`
  - returned when the email does not exist
  - returned when the password is incorrect

### Notes

- The endpoint validates input using `express-validator`.
- A successful login also sets an HTTP-only `token` cookie for browser clients.
- The returned token can be sent in `Authorization: Bearer <token>` or stored in a cookie for later requests.

---

## GET /users/profile

Retrieves the authenticated user's profile information. Requires a valid authentication token.

### Request Headers

```
Authorization: Bearer <token>
```

or

```
Cookie: token=<token>
```

### Success Response

- Status: `200 OK`
- Body: authenticated user object with profile data

#### Example Response

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "_id": "64fbe12345abcdef67890123",
  "createdAt": "2026-06-12T00:00:00.000Z",
  "updatedAt": "2026-06-12T00:00:00.000Z"
}
```

### Error Responses

- `401 Unauthorized`
  - returned when no authentication token is provided
  - returned when the token is invalid, expired, or blacklisted

### Notes

- This endpoint is protected by `authMiddleware.authUser`.
- User profile data is returned from `req.user` after successful authentication.

---

## GET /users/logout

Logs out the authenticated user by clearing the authentication token and blacklisting it to prevent reuse.

### Request Headers

```
Authorization: Bearer <token>
```

or

```
Cookie: token=<token>
```

### Success Response

- Status: `200 OK`
- Body:
  - `message` (string): confirmation message

#### Example Response

```json
{
  "message": "logged out"
}
```

### Error Responses

No specific error responses documented. Standard HTTP errors may occur.

### Notes

- The endpoint clears the `token` cookie from the client.
- The token is added to a blacklist to prevent it from being reused for authentication.
- After logout, the client should discard any stored authentication tokens.
```

### Field Requirements

- `email` (string): required, must be a valid email address
- `password` (string): required, must be at least 6 characters

### Success Response

- Status: `200 OK`
- Body:
  - `token` (string): authentication token for the user
  - `user` (object): authenticated user data

#### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "64fbe12345abcdef67890123",
    "createdAt": "2026-06-12T00:00:00.000Z",
    "updatedAt": "2026-06-12T00:00:00.000Z"
  }
}
```

### Error Responses

- `400 Bad Request`
  - validation failed for the request body
  - returned when required fields are missing or invalid
- `401 Unauthorized`
  - returned when the email does not exist in the system
  - returned when the password does not match the user's password

### Notes

- The endpoint uses `express-validator` to validate incoming request data.
- Passwords are compared using bcrypt comparison to verify authenticity.
- The returned `token` can be used to authenticate subsequent requests.

---

## POST /captain/register

Registers a new captain with vehicle details and returns an authentication token with the created captain profile.

### Request Body

Content-Type: `application/json`

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "securePassword123",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Field Requirements

- `fullname` (object)
  - `firstname` (string): required, at least 3 characters
  - `lastname` (string): optional, but should be provided as part of the name object
- `email` (string): required, must be a valid email address
- `password` (string): required, must be at least 6 characters
- `vehicle` (object)
  - `color` (string): required, must be at least 3 characters
  - `plate` (string): required, must be at least 3 characters (vehicle registration plate)
  - `capacity` (number): required, must be at least 1 (number of passengers)
  - `vehicleType` (string): required, must be one of: `'car'`, `'motorcycle'`, `'auto'`

### Success Response

- Status: `201 Created`
- Body:
  - `token` (string): authentication token for the created captain
  - `captain` (object): created captain profile with vehicle details

#### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "64fbe12345abcdef67890124",
    "createdAt": "2026-06-16T00:00:00.000Z",
    "updatedAt": "2026-06-16T00:00:00.000Z"
  }
}
```

### Error Responses

- `400 Bad Request`
  - validation failed for the request body
  - returned when required fields are missing or invalid
  - returned when vehicle type is not one of the accepted values
- `400 Bad Request`
  - returned if a captain with the same email already exists
- `500 Internal Server Error`
  - returned when an unexpected server error occurs during registration

### Notes

- The endpoint uses `express-validator` to validate incoming request data.
- Passwords are hashed before the captain profile is saved.
- Vehicle details are stored as a nested object within the captain profile.
- Each captain can register only one vehicle during registration.
- The returned token can be used to authenticate subsequent captain requests.

---

## POST /captain/login

Authenticates a captain with email and password and returns an authentication token when credentials are valid.

### Request Body

Content-Type: `application/json`

```json
{
  "email": "jane.smith@example.com",
  "password": "securePassword123"
}
```

### Field Requirements

- `email` (string): required, must be a valid email address
- `password` (string): required, must be at least 6 characters

### Success Response

- Status: `200 OK`
- Body:
  - `token` (string): authentication token for the captain
  - `captain` (object): authenticated captain profile

#### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "64fbe12345abcdef67890124",
    "createdAt": "2026-06-16T00:00:00.000Z",
    "updatedAt": "2026-06-16T00:00:00.000Z"
  }
}
```

### Error Responses

- `400 Bad Request`: validation failed for the request body
- `401 Unauthorized`: returned when the email does not exist or the password is incorrect

### Notes

- A successful login sets an HTTP-only `token` cookie for browser clients and also returns a `token` in the response body.
- The `token` can be used in `Authorization: Bearer <token>` or sent as a cookie for subsequent requests.

---

## GET /captain/profile

Retrieves the authenticated captain's profile information. Requires a valid authentication token.

### Request Headers

```
Authorization: Bearer <token>
```

or

```
Cookie: token=<token>
```

### Success Response

- Status: `200 OK`
- Body: authenticated captain object with profile and vehicle data

#### Example Response

```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane.smith@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "64fbe12345abcdef67890124",
    "createdAt": "2026-06-16T00:00:00.000Z",
    "updatedAt": "2026-06-16T00:00:00.000Z"
  }
}
```

### Error Responses

- `401 Unauthorized`: returned when no authentication token is provided, or when the token is invalid, expired, or blacklisted

### Notes

- This endpoint is protected by `authMiddleware.authCaptain` and returns the captain object on `req.captain` after successful authentication.

---

## GET /captain/logout

Logs out the authenticated captain by blacklisting the token and clearing the cookie.

### Request Headers

```
Authorization: Bearer <token>
```

or

```
Cookie: token=<token>
```

### Success Response

- Status: `200 OK`
- Body:
  - `message` (string): confirmation message

#### Example Response

```json
{
  "message": "log out successfully"
}
```

### Error Responses

- `400 Bad Request`: returned when the token is missing from both cookie and authorization header
- `500 Internal Server Error`: unexpected server error while blacklisting token

### Notes

- The endpoint clears the `token` cookie and adds the token to a blacklist to prevent reuse.
- After logout, the client should discard any stored authentication tokens.
