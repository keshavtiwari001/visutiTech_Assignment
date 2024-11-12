const Product = require('../Models/productSchema')

exports.createProduct = async (req, res) => {
    try {
        const data = req.body;
        const product = new Product(data)
        await product.save()
        res.status(201).json({ product: product, message: "new product added !" })
    } catch (error) {
        console.log(`error in creating product : ${error}`)
    }
}

exports.getAllProducts = async (req, res) => {
    const product = await Product.find();
    res.status(200).json(product);
}

exports.getSingleProduct = async (req, res) => {
    const id = req.params.id
    const product = await Product.findById(id)
    if (!product) {
        return res.status(400).json({ error: "no product found !!" })
    }
    res.status(200).json({ product: product })
}

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const product = await Product.findByIdAndUpdate(id, data);
    res.status(200).json(product)
}

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id)
    res.status(200).json({ message: "product removed successfully !" })
}