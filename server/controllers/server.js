const express = require("express");
const router = express.Router();

const categoryRoute = require("./categories");
const productRoute = require("./products");
const userRoute = require("./users");
const authRoute = require("./auth");

router.use("/categories", categoryRoute);
router.use("/products", productRoute);
router.use("/users", userRoute);
router.use("/auth", authRoute);

module.exports = router;