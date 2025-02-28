const express = require('express')
const router = express.Router()

const { createProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct } = require("../controllers/productController")

router.get('/', getAllProducts)
router.get('/:id', getSingleProduct)
router.post('/', createProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router