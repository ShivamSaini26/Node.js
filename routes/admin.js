const express = require('express');
const router = express.Router();

const path = require('path');

const rootDir = require('../util/path');

//routing to the file
router.use("/add-product", (req, res, next) => {
    res.render('add-pooduct', { pageTitle: 'ADd Product', path: '/admin/add-product' })
}
    //filename, dynamic content to be set
)
router.post("/admin/add-product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;