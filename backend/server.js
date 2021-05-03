require("dotenv").config();
const express = require("express");

const categoriesRoute = require("./routes/categoriesRoute");

const app = express();

app.use(express.json());
app.use("/api/categories", categoriesRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));