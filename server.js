var express = require("express");

var app = express();

var PORT = process.env.PORT || 4321;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var methodOverride = require("method-override");
app.use(methodOverride("_method"));

var routes = require("./controllers/burgers_controllers");
app.use(routes);

app.use(express.static("app/public"));

app.listen(PORT, function() {
  console.log("Now listening on http://localhost:" + PORT);
});
