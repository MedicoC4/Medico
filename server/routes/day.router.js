const route = require('express').Router()
const {dayAvailability} = require("../controller/day.controller")

route.post("/:doctorId", dayAvailability)


module.exports = route