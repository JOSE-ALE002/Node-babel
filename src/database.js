import mongoose from 'mongoose';

const user = "Jose_27";
const dbname = "veterinaria";
const password= "fcm8gi06BoA2rNok";

require('dotenv').config();

(async () => {

    // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tc0kn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tc0kn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    
    try {
        let result = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Estas conectado a la base de datos: ", result.connection.name);
    } catch (error) {
        console.log("Error al conectar a la base de datos" + error);
    }
})();

