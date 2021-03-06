const express = require("express"),
  router = express.Router();

router.get("/", (req,res) => {
  // console.log(req.session)
  if (req.session && req.session.name) {
    res.redirect("/account/dashboard");
  } else {
    res.redirect("/account/login");
  }
});

//==================HANDLE LOGIN=======================
router.get("/login", (req,res) => {
  // console.log("hello to the login page")
  console.log("a bunch of potatoes are exploding on the get login request")
  if (req.session && req.session.name) {
    res.redirect("/dashboard");
  }
  res.render("login");
});

router.post("/login", (req,res) => {
  if (req.session) {
    console.log("this is the post login request    "+req.body.name)
    req.session.name = req.body.name;
  }
  res.redirect("/account");
});

//=================USER MAIN PAGE======================
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

  var data = {};
  if (req.session && req.session.favMovies) {
    data.favMovies = req.session.favMovies;
  } else {
    data.message = "No movies found";
  }
  res.render("dashboard", { favMovies: data.favMovies, message: data.message, name: req.session.name || "buddy" });
});

//====================LOGOUT===========================
router.get("/logout", (req,res) => {
  req.session.destroy(() => {
    res.redirect("/account/login");
  });
});

module.exports = router;
