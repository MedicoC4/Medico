const route = require('express').Router()
const {updateStatus,postAppointement,getAppointement} = require("../controller/appointementList.controller")

route.put("/updateAppoint/:idAppoint", updateStatus)
route.post("/add", postAppointement)
route.get("/getAppointement/:status/:Docid", getAppointement)



module.exports = route