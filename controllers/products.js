const Product=require('../model/product')


exports.getAddProducts=(req, res, next) => {
    res.render('add-pooduct', { pageTitle: 'ADd Product', path: '/admin/add-product' })
};

exports.postAddProducts=(req, res, next) => {
const product=new Product(req.body.title);
product.save();
    res.redirect("/");
};

exports.getProducts= (req, res, next) => {
    const product=new Product();
    Product.fetchAll();
    res.render('shop', { pageTitle: 'ADD Product-Main', path: '/' });
   
  };