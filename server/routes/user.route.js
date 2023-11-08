const route = require('express').Router()
const {getAll, create, update} = require("../controller/user.controller")

route.get("/getAll", getAll)
route.post("/createUser", create)
route.put("/updateUser", update)

module.exports = route