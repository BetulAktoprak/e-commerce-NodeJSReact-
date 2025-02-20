const express = require("express");
const User = require("../models/User");
const genericController = require("../controllers/genericController");

const router = express.Router();
const userController = genericController(User);

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.put("/:id", userController.update);

router.delete("/:email", async(req, res) => {
    try {
        const email = req.params.email;

        const deletedUser = await User.findOneAndDelete({email});

        if(!deletedUser){
            return res.status(404).json({error : "Kullanıcı bulunamadı.."});
        }

        res.status(200).json({message : "Kullanıcı başarıyla silindi. ", deletedUser});

    } catch (error) {
        res.status(500).json({error : "Sunucu hatası.."});
    }
});

module.exports = router;