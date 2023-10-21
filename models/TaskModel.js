const mongoose = require("mongoose")


const taskSchema = new mongoose.Schema({
  task: { //On crée un objet avec une property qui aura pour key "task", un "string" comme valeur et sera une "required" property dans notre database
    type: String,
    required: true
  }
})

//Le model a pour nom "Task" avec la même structure que celle stored dans "taskSchema" crée précedemment
module.exports = mongoose.model("Task", taskSchema);