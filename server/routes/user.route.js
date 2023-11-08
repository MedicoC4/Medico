const route = require('express').Router()
const {getAll, create, update, deleteOne} = require("../controller/user.controller")

route.get("/getAll", getAll)
route.post("/createUser", create)
route.put("/updateUser/:id", update)
route.delete("/deleteUser/:id", deleteOne)

module.exports = route