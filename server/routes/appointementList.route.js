const route = require('express').Router()
const {updateStatus,postAppointement} = require("../controller/appointementList.controller")

route.put("/updateAppoint/:idAppoint", updateStatus)
route.post("/add", postAppointement)



module.exports = route