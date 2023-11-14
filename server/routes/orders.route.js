const route = require('express').Router()
const {getAll, create, update, deleteOne} = require("../controller/orders.controller")


route.get("/getAll",getAll)
route.post("/createOrder",create)
route.patch("/updateOrder/:id", update);
route.delete("/deleteOrder/:id",deleteOne)

module.exports = route