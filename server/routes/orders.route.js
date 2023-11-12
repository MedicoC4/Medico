const route = require('express').Router()
const {getAll, create, deleteOne} = require("../controller/orders.controller")


route.get("/getAll",getAll)
route.post("/createOrder",create)
route.delete("/deleteOrder/:id",deleteOne)

module.exports = route