import express from "express";
import indexRoute from './routes/index.routes';
import './database';
import path from 'path';    
const app = express();
import morgan from 'morgan';

console.log(__dirname + "/public");

// const PORT = process.env.PORT || 3000;

// MIDDLEWARES
// app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(morgan("dev")); //Con esta linea podemos ver en la consola, las rutas que visita el usuario

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "ejs");
app.set('views', __dirname + '/views');


// RUTAS DE LA PAGINA
app.use(indexRoute);

app.use((req, res, next) => {
    res.status(404).render("404", {
        nombre: "404",
        descripcion: "No encontrado"
    });
});


export default app;