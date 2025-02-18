const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

const mainRoute = require("./controllers/server");

dotenv.config();

app.use("/api", mainRoute);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDb bağlantısı başarılı..");
    } catch (error) {
        throw new Error(error);
    }
}
const PORT = 5000;

app.listen(PORT, () => {
    connect();
    console.log(`Sunucu ${PORT} portu üzerinde çalışıyor.`);
});