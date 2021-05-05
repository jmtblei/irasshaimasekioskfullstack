require("dotenv").config();

const data = require("./data/data");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(data.products);
        console.log("Data import SUCCESS");
        process.exit();
    } catch (error) {
        console.error("Error with data import");
        process.exit(1);
    }
};

importData();