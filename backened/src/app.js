const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const userRoutes = require('../src/routes/user.routes')
app.use(cors());
app.use("/users", userRoutes)
module.exports = app;