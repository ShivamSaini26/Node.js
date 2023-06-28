// imports
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const errorController=require('./controllers/404')

//setting templating engine
app.set("view engine", "ejs");
app.set("views", "views");

//routing paths
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

//serving files statically
app.use(express.static(path.join(__dirname, "public")));

//parsing body
app.use(bodyParser.urlencoded({ extended: false }));

//routing
app.use("/admin", adminRoutes); //order matters when routing
app.use(shopRoutes); //homepage of the app

//404 route
app.use(errorController.error);

//server is listening
app.listen(3000);
