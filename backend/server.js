require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const categoriesRoute = require("./routes/categoriesRoute");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use("/api/categories", categoriesRoute);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));