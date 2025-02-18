const express = require("express");
const router = express.Router();

const categoryRoute = require("./categories");
const productRoute = require("./products");

router.use("/categories", categoryRoute);
router.use("/products", productRoute);

module.exports = router;