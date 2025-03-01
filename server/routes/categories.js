const express = require("express");
const Category = require("../models/Category");
const genericController = require("./genericController");

const router = express.Router();
const categoryController = genericController(Category);

router.get("/", categoryController.getAll);
router.get("/:id", categoryController.getById);
router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.delete);

module.exports = router;
