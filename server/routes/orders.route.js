const route = require('express').Router()
const {getAllOrders} = require("../controller/orders.controller")


route.get("/getAll",getAllOrders)

module.exports = route