"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTasks = exports.deleteTask = exports.TaskToggleDone = exports.TaskEdit = exports.RenderTaskEdit = exports.CreateTask = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Task = _interopRequireDefault(require("../models/Task"));

var renderTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var arrayTasks;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Task["default"].find().lean();

          case 3:
            arrayTasks = _context.sent;
            res.render("index", {
              arrayTasks: arrayTasks
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log("Ha ocurrido un error", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function renderTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.renderTasks = renderTasks;

var CreateTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var task, resp;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            task = (0, _Task["default"])(req.body);
            _context2.prev = 1;
            _context2.next = 4;
            return task.save();

          case 4:
            resp = _context2.sent;
            console.log(resp);
            res.redirect("/");
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log("Ha ocurrido un error", _context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function CreateTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CreateTask = CreateTask;

var deleteTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Task["default"].findByIdAndDelete(id);

          case 4:
            res.redirect("/");
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](1);
            console.log("Ha ocurrido un error", _context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 7]]);
  }));

  return function deleteTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteTask = deleteTask;

var TaskToggleDone = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Task["default"].findById(id);

          case 4:
            task = _context4.sent;
            task.done = !task.done;
            _context4.next = 8;
            return task.save();

          case 8:
            res.json({
              error: false,
              msj: "Estado cambiado",
              data: task.done
            });
            _context4.next = 15;
            break;

          case 11:
            _context4.prev = 11;
            _context4.t0 = _context4["catch"](1);
            res.json({
              error: true,
              msj: "No se ha podido ejecutar el cambio"
            });
            console.log("Ha ocurrido un error", _context4.t0);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 11]]);
  }));

  return function TaskToggleDone(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.TaskToggleDone = TaskToggleDone;

var TaskEdit = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return _Task["default"].findByIdAndUpdate(id, req.body);

          case 4:
            res.redirect("/");
            _context5.next = 10;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](1);
            console.log("Ha ocurrido un error", _context5.t0);

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[1, 7]]);
  }));

  return function TaskEdit(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.TaskEdit = TaskEdit;

var RenderTaskEdit = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            console.log(id);
            _context6.prev = 2;
            _context6.next = 5;
            return _Task["default"].findById(id);

          case 5:
            task = _context6.sent;
            res.render("edit", {
              task: task
            });
            _context6.next = 12;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](2);
            console.log("Ha ocurrido un error", _context6.t0);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 9]]);
  }));

  return function RenderTaskEdit(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.RenderTaskEdit = RenderTaskEdit;