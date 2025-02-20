const express = require("express");
const router = express.Router();

const categoryRoute = require("../routes/categoryRoutes");
const userRoute = require("../routes/userRoutes");
const authRoute = require("./auth");

router.use("/categories", categoryRoute);
router.use("/users", userRoute);
router.use("/auth", authRoute);

module.exports = router;