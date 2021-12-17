import { Router } from 'express';  

const router = Router();

//Permite ejecutar nuestro codigo con sistaxis nueva y nos va permitir tener todas las caracterisitcas nuevas de javascript dentro de nodejs
router.get("/", (req, res) => {
    res.render("index", {

    });
});

router.get("/about", (req, res) => {
    res.render("about", {   
        msj: "Pagina de about"
    });
});

router.get("/edit", (req, res) => {
    res.render("edit", {

    });
})


export default router;


