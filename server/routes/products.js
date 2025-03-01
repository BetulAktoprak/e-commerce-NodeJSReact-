const express = require("express");
const genericController = require("./genericController");
const Product = require("../models/Product");

const router = express.Router();
const productController = genericController(Product);

router.get("/", productController.getAll);
router.get("/:id", productController.getById);
router.post("/", productController.create);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;