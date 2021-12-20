"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index.routes"));

require("./database");

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var app = (0, _express["default"])();
console.log(__dirname + "/public"); // const PORT = process.env.PORT || 3000;
// MIDDLEWARES
// app.use(express.static(path.join(__dirname, "src")));

app.use(_express["default"]["static"](__dirname + "/public"));
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])("dev")); //Con esta linea podemos ver en la consola, las rutas que visita el usuario
// app.set('views', path.join(__dirname, 'views'));

app.set('view engine', "ejs");
app.set('views', __dirname + '/views'); // RUTAS DE LA PAGINA

app.use(_index["default"]);
app.use(function (req, res, next) {
  res.status(404).render("404", {
    nombre: "404",
    descripcion: "No encontrado"
  });
});
var _default = app;
exports["default"] = _default;