//we will extract router from express
const {Router}= require("express")

//On importe les 4 functions créees dans TaskControllers.js
const { getTasks, saveTask, deleteTask, updateTask } = require("../controllers/TaskControllers") 

const router = Router()


router.get("/get", getTasks); //on écrit getTasks ici pour l'utiliser et qu'elle devienne clair en haut pour confimer
//We will do a GET request qu'on pourra lire ici: http://localhost:5000/api/get car on a ajouté /api dans server.js
//getTasks function is created in TaskControllers.js 

router.post("/save", saveTask)

router.put("/update/:id", updateTask)

router.delete("/delete/:id", deleteTask)

//Pour update et delete on rajoute un params (endpoint) pour identifier les properties de l'objet à modifier ou supprimer


module.exports= router //To export router from here and be able to use it anywhere