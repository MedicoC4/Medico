const route = require('express').Router()
const {updateQuantity} = require("../controller/products.controller")

route.put("/updateQuantity",updateQuantity)

module.exports = route