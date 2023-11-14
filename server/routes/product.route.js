const route = require('express').Router()
const {getAll, create, update, deleteOne} = require("../controller/product.controller")

route.get("/getAll", getAll)
route.post("/createProduct", create)
route.put("/updateProduct/:id", update)
route.delete("/deleteProduct/:id", deleteOne)

module.exports = route