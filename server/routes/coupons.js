const express = require("express");
const genericController = require("./genericController");
const Coupon = require("../models/Coupon");

const router = express.Router();
const couponController = genericController(Coupon);

router.get("/", couponController.getAll);
router.get("/:id", couponController.getById);
router.post("/", couponController.create);
router.put("/:id", couponController.update);
router.delete("/:id", couponController.delete);

module.exports = router;