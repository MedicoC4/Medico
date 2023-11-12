const route = require('express').Router()
const {updateStatus,postAppointement,getAppointement,deleteAppoint} = require("../controller/appointementList.controller")

route.put("/updateAppoint/:idAppoint", updateStatus)
route.post("/add", postAppointement)
route.get("/getAppointement/:status/:Docid", getAppointement)
route.delete("/delete/:DayOf", deleteAppoint)



module.exports = route