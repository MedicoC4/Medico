const route = require('express').Router()
const {getAll} = require("../controller/doctor.controller")

route.get("/getAll", getAll)

module.exports = route