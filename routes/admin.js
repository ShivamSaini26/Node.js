const express = require('express');
const router = express.Router();
const path = require('path');

const productControllers=require('../controllers/products');

//routing to controllers
router.use("/add-product", productControllers.getAddProducts
);

router.post("/admin/add-product", productControllers.postAddProducts);

//exporting router
module.exports = router;