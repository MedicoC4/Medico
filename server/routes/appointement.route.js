const route = require('express').Router()
const {getAvaibility} = require("../controller/appointement.controller")

route.get("/:dayId", getAvaibility)


module.exports = route