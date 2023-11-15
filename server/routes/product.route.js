const route = require('express').Router()
const {getAll, getOne, create, update, deleteOne} = require("../controller/products.controller")

route.get("/getAll", getAll)
route.get("/getOne/:id", getOne)
route.post("/createProduct", create)
route.put("/updateProduct/:id", update)
route.delete("/deleteProduct/:id", deleteOne)

module.exports = route