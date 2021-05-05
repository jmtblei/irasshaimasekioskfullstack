const Product = require ("../models/Product");

//@desc helper function 
//@get all products
const getAllProducts = async (req, res) => {
    try {
        const { category } = req.query;
        const products = await Product.find(category ? { category } : {});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

module.exports = {
    getAllProducts,
}