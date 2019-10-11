const express = require("express"),
  router = express.Router();

router.get("/", (req,res) => {
  console.log(req.session)
  if (req.session && req.session.name) {
    res.redirect("/account/dashboard");
  } else {
    res.redirect("/account/login");
  }
});

router.get("/login", (req,res) => {
  console.log("hello to the login page")
  if (req.session && req.session.name) {
    res.redirect("/dashboard");
  }
  res.render("login");
});

router.post("/login", (req,res) => {
  if (req.session) {
    req.session.name = req.body.name;
  }
  res.redirect("/account");
});

router.post("/add", (req,res) => {
  if (req.session) {
    if (!req.session.favMovies) req.session.favMovies = [];
    console.log(req.body.title);
    req.session.favMovies.push({ title: req.body.title });
  }
  res.redirect("/account/dashboard");
});

router.get("/dashboard", (req,res) => {
  console.log(req.session.favMovies);
  console.log(data)
  var data = {};
  if (req.session && req.session.favMovies) {
    data.favMovies = req.session.favMovies;
  } else {
    data.message = "No movies found";
  }
  res.render("dashboard", { favMovies: data.favMovies, message: data.message, name: req.session.name || "buddy" });
});

router.get("/logout", (req,res) => {
  req.session.destroy(() => {
    res.redirect("/account/login");
  });
});

module.exports = router;
