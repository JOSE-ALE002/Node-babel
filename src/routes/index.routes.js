import {
    Router
} from 'express';
import {
    renderTasks,
    CreateTask,
    deleteTask,
    TaskToggleDone,
    TaskEdit,
    RenderTaskEdit
} from "../controllers/task.controller";

const router = Router();

//Permite ejecutar nuestro codigo con sistaxis nueva y nos va permitir tener todas las caracterisitcas nuevas de javascript dentro de nodejs
router.get("/about", (req, res) => {
    res.render("about", {
        msj: "Pagina de about"
    });
});

// RUTAS
router.get("/", renderTasks);

router.post("/task/add", CreateTask);

router.get("/task/:id/edit", RenderTaskEdit);

router.post("/task/:id/edit", TaskEdit);

router.get("/task/:id/delete", deleteTask);

router.put("/toogleDone/:id", TaskToggleDone);

// GUARDAR DATOS EN LA DB


export default router;