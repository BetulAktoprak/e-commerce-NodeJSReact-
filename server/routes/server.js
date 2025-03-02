const express = require("express");
const router = express.Router();

const categoryRoute = require("./categories");
const userRoute = require("./users");
const authRoute = require("./auth");
const productRoute = require("./products");
const couponRoute = require("./coupons");

router.use("/categories", categoryRoute);
router.use("/users", userRoute);
router.use("/auth", authRoute);
router.use("/products", productRoute);
router.use("/coupons", couponRoute);

module.exports = router;