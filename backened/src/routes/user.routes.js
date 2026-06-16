const express = require("express");
const router = express.Router();
const { body } = require("express-validator")
const userController = require("../controllers/userController")
const authMiddleware = require("../middlewares/auth.middleware")

router.post("/register", [body('email').isEmail().withMessage("invalid email"),
body('fullname').isLength({ min: 3 }).withMessage("first name must be atleast 3 characters long"),
body('password').isLength({ min: 6 }).withMessage("password must be atleast 6 chracters long")
],
    userController.registerUser)

router.post("/login", [body('email').isEmail().withMessage("invalid email"),
body("password").isLength({ min: 6 }).withMessage("password must be atleast 6 chracters long")
], userController.loginuser)

router.get("/profile", authMiddleware.authUser, userController.getuserProfile)
router.get("/logout", userController.logoutUser)

module.exports = router;