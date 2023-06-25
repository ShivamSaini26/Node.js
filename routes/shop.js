const express = require('express');
const router = express.Router();

const path = require('path');

const rootDir = require('../util/path');

//routing to the pug file
router.get("/", (req, res, next) => {
  res.render('shop', { pageTitle: 'ADD Product-Main', path: '/' });
  //filename, dynamic content to be set
});

router.post("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;