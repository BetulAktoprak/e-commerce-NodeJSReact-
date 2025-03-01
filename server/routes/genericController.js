const { Model } = require("mongoose");

const genericController = (Model) => (
    {
        getAll : async(req, res) => {
            try {
                const items = await Model.find();
                res.status(200).json(items);
            } catch (error) {
                res.status(500).json({error : "Sunucu hatası.."});
            }
        },
        getById : async(req, res) => {
            try {
                const item = await Model.findById(req.params.id);
                if(!item){
                    return res.status(404).json({error : "Kayıt bulunamadı.."});
                }
                res.status(200).json(item);
            } catch (error) {
                res.status(500).json({error : "Sunucu hatası.."});
            }
        },
        create : async(req, res) => {
            try {
                const newItem = new Model(req.body);
                await newItem.save();
                res.status(201).json(newItem);
            } catch (error) {
                res.status(500).json({error : "Sunucu hatası.."});
            }
        },
        update : async(req, res) => {
            try {
                const item = await Model.findById(req.params.id);
                if(!item){
                    res.status(404).json({error : "Kayıt bulunamadı.."});
                }
                const updatedItem = await Model.findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    {new: true}
                );
                res.status(200).json(updatedItem);
            } catch (error) {
                res.status(500).json({error : "Sunucu hatası.."});
            }
        },
        delete : async(req, res) => {
            try {
                const item = await Model.findByIdAndDelete(req.params.id);
                if(!item){
                    res.status(404).json({error : "Kayıt bulunamadı.."});
                }
                res.status(200).json({message : "Kayıt başarıyla silindi.", deletedItem : item});
            } catch (error) {
                res.status(500).json({error : "Sunucu hatası.."});
            }
        }
    }
);

module.exports = genericController;