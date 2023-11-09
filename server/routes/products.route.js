const route = require('express').Router()

const {getAll, create, update, deleteOne} = require ('../controller/products.controller')


route.get("/getAll", getAll)
route.post("/createprod", create)
route.put("/updateprod/:id", update)
route.delete("/deleteprod/:id", deleteOne)

module.exports = route