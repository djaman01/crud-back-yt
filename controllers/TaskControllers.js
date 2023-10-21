//import the Task schema here to use it
const TaskModel = require("../models/TaskModel")

//Dans ce TaskControllers.js, on va créer les function qu'on met dans les route handler, pour écrire les choses plus brievement dasn server.js 
//On va crée et exporter les functiosn pour les utiliser dans TaskRoutes.js ou il faudra les importer 


// 1) Creating and exporting the get function
module.exports.getTasks = async (req, res) => { //http://localhost:5000/api/get pour voir le résultat (car app.use("/api",routes); appended)
  const tasks = await TaskModel.find()//It will find all the tasks
  res.send(tasks)

}



// 2) Creating and exporting the Save function (on ne save que 1 task pour l'exemple c'est pourquoi on l'écrit au singulier)
module.exports.saveTask = (req, res) => {
  const { task } = req.body //On crée des property task qu'on a définit dans le model

  //creating a new task
  Taskmodel.create({ task })
    .then((data) => {
      console.log("Saved Successfully...")
      res.status(201).send(data)//Veut dire que quelque chose a bien été crée et.send(data) = send ce qui a été crée
    })
    .catch((err) => { //If it fails to create the task
      console.log(err);
      res.send({ error: err, msg: "Somthing went wrong !" });
    });

};

// 3) Creating and exporting the Update function
module.exports.updateTask = (req, res) => {
  const { id } = req.params
  const { task } = req.body

  TaskModel.findByIdAndUpdate(id, { task })
    .then(() => res.send("Updated Successfully"))
    .catch((err) => { //If it fails to create the task
      console.log(err);
      res.send({ error: err, msg: "Somthing went wrong !" });
    });

};

// 4) Creating and exporting the Delete function
module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted Successfully"))
    .catch((err) => { //If it fails to create the task
      console.log(err);
      res.send({ error: err, msg: "Somthing went wrong !" });
    });

};

//So now we have 4 functions: getTasks, saveTasks, updateTask, deleteTask that we've created and exported
//We have now to import this all in the route = TaskRoutes.js

