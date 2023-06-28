const express = require('express');
const router = express.Router();
const path = require('path');

const productControllers=require('../controllers/products');

//routing to the template file
router.get("/",productControllers.getProducts);

router.post("/", productControllers.getProducts);

module.exports = router;