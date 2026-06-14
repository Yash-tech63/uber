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

## POST /user/login

Authenticates a user with email and password, returns an authentication token if credentials are valid.

### Request Body

Content-Type: `application/json`

```json
{

---

## GET /user/profile

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
  - returned when the token is invalid or expired

### Notes

- This endpoint requires authentication via the `authMiddleware.authUser` middleware.
- The user data is extracted from the authenticated request context (`req.user`).

---

## GET /user/logout

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
