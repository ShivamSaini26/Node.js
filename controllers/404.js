exports.error = (req, res, next) => {
    //404 error page
    res.status(404).render("404", { pageTitle: "Page not Found !" });
}