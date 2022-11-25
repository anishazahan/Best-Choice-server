const express = require('express');
const router = express.Router();
const productController = require('../api/controllers/productController');

router.route('/')
// .get(productController.getAllProducts)
.post(productController.createFeatureProduct)
// .patch(productController.updateProduct)
// .delete(productController.deleteProduct);

module.exports = router;