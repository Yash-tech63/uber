const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require("cors");
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoutes = require('../src/routes/user.routes')
const captainRoutes = require('../src/routes/captain.routes')
app.use(cors());
app.use("/users", userRoutes)
app.use("/captain", captainRoutes)
module.exports = app;