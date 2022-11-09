var express = require('express');
const passport = require('passport');
var router = express.Router();
const userModel = require("./users");
const localStrategy = require("passport-local");
const multer = require("multer");

passport.use(new localStrategy(userModel.authenticate()))


router.get('/', function(req, res) {
  res.render('index');
});

router.get('/dashboard', isLoggedIn, async function(req, res) {
  let loggedInUser = await userModel
  .findOne({username: req.session.passport.user})
  res.render("dashboard",{user: loggedInUser} )

});

router.post('/register', function(req, res) {
  const userData = new userModel({
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email, 
  })

  userModel.register(userData, req.body.password)
  .then(function(reg){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/dashboard");
    })
  })
});

router.get('/register', function(req, res) {
  res.render('register');
});

router.post("/", passport.authenticate("local",{
  successRedirect: "/dashboard",
  failureRedirect: "/"
}), function(req, res, next){

});


router.get("/logout", function(req, res){
  req.logout(function(err){
    if(err) throw err;
    res.redirect("/");
  })
})

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

router.get('/check/:username', async function(req, res, next){
  let user  = await userModel.findOne({username: req.params.username})
  res.json({user})
})

module.exports = router;
