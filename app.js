const express = require("express");
const path=require('path');
const app = express();

app.set('view engine','ejs');
app.set('views','views');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop.js');

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({ extended: false }));



//routing
app.use('/admin',adminRoutes);//order matters
app.use(shopRoutes);//homepage of the app

app.use((req,res, next)=>{ //404 error page
    res.status(404).render('404',{pageTitle:'Page not Found !'})
});

//listening the server
app.listen(3000);
