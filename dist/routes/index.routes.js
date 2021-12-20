"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)(); //Permite ejecutar nuestro codigo con sistaxis nueva y nos va permitir tener todas las caracterisitcas nuevas de javascript dentro de nodejs

router.get("/about", function (req, res) {
  res.render("about", {
    msj: "Pagina de about"
  });
}); // RUTAS

router.get("/", _task.renderTasks);
router.post("/task/add", _task.CreateTask);
router.get("/task/:id/edit", _task.RenderTaskEdit);
router.post("/task/:id/edit", _task.TaskEdit);
router.get("/task/:id/delete", _task.deleteTask);
router.put("/toogleDone/:id", _task.TaskToggleDone); // GUARDAR DATOS EN LA DB

var _default = router;
exports["default"] = _default;