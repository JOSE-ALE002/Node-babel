"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var user = "Jose_27";
var dbname = "veterinaria";
var password = "fcm8gi06BoA2rNok";

require('dotenv').config();

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var uri, result;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tc0kn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
          uri = "mongodb+srv://".concat(process.env.DB_USER, ":").concat(process.env.DB_PASS, "@cluster0.tc0kn.mongodb.net/").concat(process.env.DB_NAME, "?retryWrites=true&w=majority");
          _context.prev = 1;
          _context.next = 4;
          return _mongoose["default"].connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });

        case 4:
          result = _context.sent;
          console.log("Estas conectado a la base de datos: ", result.connection.name);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.log("Error al conectar a la base de datos" + _context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[1, 8]]);
}))();