const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası.."});
    }
});

router.get("/:id", async(req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({error : "Kullanıcı bulunamadı.."});
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası..."});
    }
});

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

router.put("/:id", async(req, res) => {
    try {
        const userId = req.params.id;
        const updateInfo = req.body;

        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({error : "Kullanıcı bulunamadı.."});
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            updateInfo,
            {new : true}
        )
        res.status(200).json({message : "Kullanıcı güncellendi. ", updatedUser});
        
    } catch (error) {
        res.status(500).json({error : "Sunucu hatası.."});   
    }
});

module.exports = router;