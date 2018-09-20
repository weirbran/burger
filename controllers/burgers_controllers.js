var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", { burgers: data });
  });
});

router.post("/burgers/create", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    res.render("index", { burgers: data });
    res.redirect("/");
  });
});

router.put("/burgers/update", function(req, res) {
  burger.updateOne(req.body.id, function(result) {
    res.render("index", { burgers: data });
    res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
