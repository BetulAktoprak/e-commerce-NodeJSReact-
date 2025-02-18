const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("Categori Listesi");
});

module.exports = router;