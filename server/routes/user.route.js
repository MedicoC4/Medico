const route = require('express').Router()
const {getAll, create, update, deleteOne,SignIn,updataLongLat} = require("../controller/user.controller")

route.put("/updateLongLat/:idUse", updataLongLat)
route.get("/getAll", getAll)
route.post("/createUser", create)
route.post("/signIn", SignIn)
route.put("/updateUser/:id", update)
route.delete("/deleteUser/:id", deleteOne)

module.exports = route