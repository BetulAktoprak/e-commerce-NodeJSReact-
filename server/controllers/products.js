const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("Ürün Listesi");
});

module.exports = router;