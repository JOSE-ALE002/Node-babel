import Task from '../models/Task';

export const renderTasks = async (req, res) => {
    try {
        // Con esto retorno objetos de mongoDB
        // const arrayTasks = await Task.find();    

        // Con esta linea estoy diciendo que devuelva objetos de javascript
        const arrayTasks = await Task.find().lean();
        res.render("index", {
            arrayTasks
        });
    } catch (error) {
        console.log("Ha ocurrido un error", error);
    }
}

export const CreateTask = async (req, res) => {
    const task = Task(req.body);

    try {
        // Devuelve el objeto despues de haberse guardado en MongoDB
        const resp = await task.save();

        console.log(resp);
        res.redirect("/");
    } catch (error) {
        console.log("Ha ocurrido un error", error);
    }
}

export const deleteTask = async(req, res) => {

    const {id} = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.log("Ha ocurrido un error", error);    
    }
}

export const TaskToggleDone = async (req, res) => {

    const {id} = req.params;

    try {
        const task = await Task.findById(id);

        task.done = !task.done;

        await task.save();

        res.json({
            error: false,
            msj: "Estado cambiado",
            data: task.done
        });
    } catch (error) {
        res.json({
            error: true,
            msj: "No se ha podido ejecutar el cambio"
        });
        console.log("Ha ocurrido un error", error);            
    }
}

export const TaskEdit = async (req, res) => {

    const {
        id
    } = req.params;
    try {
        await Task.findByIdAndUpdate(id, req.body)
        res.redirect("/");
    } catch (error) {
        console.log("Ha ocurrido un error", error);
    }
}

export const RenderTaskEdit = async (req, res) => {

    const id = req.params.id;

    console.log(id);
    try {
        const task = await Task.findById(id)

        res.render("edit", {
            task
        });
    } catch (error) {
        console.log("Ha ocurrido un error", error);
    }
}