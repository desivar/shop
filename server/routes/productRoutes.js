// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { getProducts, createProduct } = require('../controllers/productCtrl');

router.get('/', getProducts);
router.post('/', createProduct);

module.exports = router;
