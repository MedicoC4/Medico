const route = require('express').Router()
const {getAll, getOne, create, update, deleteOne, getByUserId} = require("../controller/orders.controller")


route.get("/getAll",getAll)
route.get("/oneOrder/:id",getOne)
route.get("/getById/:userId",getByUserId)
route.post("/createOrder",create)
route.patch("/updateOrder/:id", update);
route.delete("/deleteOrder/:id",deleteOne)

module.exports = route