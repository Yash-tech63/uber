const express = require('express')
const router = express.Router();
const { body } = require("express-validator")
const captainController = require("../controllers/captain.controller")
const authMiddleware = require("../middlewares/auth.middleware")

router.post("/register", [body('email').isEmail().withMessage("invalid email"),
body('fullname').isLength({ min: 3 }).withMessage("first name must be atleast 3 characters long"),
body('password').isLength({ min: 6 }).withMessage("password must be atleast 6 chracters long"),
body("vehicle.color").isLength({ min: 3 }).withMessage('color must be at least 3 character long '),
body('vehicle.plate').isLength({ min: 3 }).withMessage('plate must be atleast 3 character long'),
body('vehicle.capacity').isLength({ min: 1 }).withMessage('capacity must be atleast 1'),
body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('invalid')
], captainController.registerCaptain
)

router.post("/login", [body('email').isEmail().withMessage("invalid email"),
body('password').isLength({ min: 6 }).withMessage("password must be atleast 6 chracters long"),
captainController.logincaptain

])
router.get("/profile", authMiddleware.authCaptain, captainController.getCaptainProfile)
router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)

module.exports = router