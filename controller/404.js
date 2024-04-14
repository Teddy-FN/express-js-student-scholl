exports.errorPage = (req, res, next) => {
  res.status(404).render("404.ejs", {
    pageTitle: "Error Page",
    path: null,
  });
};
