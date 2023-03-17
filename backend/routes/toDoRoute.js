const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/controller");
const route = Router();

route.get("/",getToDo)
route.post("/save",saveToDo)
route.put("/update",updateToDo)
route.delete("/delete",deleteToDo)

module.exports = route;