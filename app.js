const express = require("express");
const path=require('path');
const bodyParser = require("body-parser");
const app = express();

//setting templating enzines
app.set('view engine','pug');
app.set('views','views');

//routing paths
const adminRoutes=require('./routes/admin.js');
const shopRoutes=require('./routes/shop.js');

//serving files statically
app.use(express.static(path.join(__dirname,'public')));

//parsing body
app.use(bodyParser.urlencoded({ extended: false }));

//routing
app.use('/admin',adminRoutes);//order matters when routing
app.use(shopRoutes);//homepage of the app

app.use((req,res, next)=>{ //404 error page
    res.status(404).render('404',{pageTitle:'Page not Found !'})
});

//listening server
app.listen(3000);
