// imports
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const app = express();

//setting templating engine
// app.set("view engine", "pug");//for pug
app.engine('handlebars', expressHbs.engine({
    extname: "handlebars",
    defaultLayout: "",
    layoutsDir: "views/layouts/",
}));
app.set("view engine", "handlebars");
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
app.use((req, res, next) => {
  //404 error page
  res.status(404).render("404", { pageTitle: "Page not Found !" });
});

//server is listening
app.listen(3000);
