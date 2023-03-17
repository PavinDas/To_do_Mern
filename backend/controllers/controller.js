const ToDoModel = require("../models/toDoModels");

module.exports.getToDo = async (req,res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo)
}

module.exports.saveToDo = async (req,res) => {
    const { text } = req.body 

   ToDoModel
    .create({text})
    .then((data)=> {
        res.send(data)
    })
}

module.exports.updateToDo = async (req,res) => {
    const {_id, text } = req.body 
    // const noteId = req.params.id;
     
    const note = await ToDoModel.findByIdAndUpdate(_id,{text:text})

    // const note = await Note.findById(noteId);

    res.json({note:note})
  
}

module.exports.deleteToDo = async (req,res)=>{
    const {_id } = req.body 

    await ToDoModel.deleteOne({id:_id})

    // res.send("success")
}