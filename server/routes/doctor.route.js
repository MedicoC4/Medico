const route = require('express').Router()
const {getAll , getOne , drop , change , add, migrateDoctor, updateLocation, recordsDoc} = require("../controller/doctor.controller")




route.get("/getAll", getAll)
route.get("/getOneDoc/:id", getOne)
// route.drop("/deleteDoc/:id", drop)
route.post("/addDoc", add)
route.put("/updateDoc" , change)
route.post("/migrationDoctor",migrateDoctor)
route.put("/updateLocation" , updateLocation)
route.put('/updateRecords', recordsDoc)





module.exports = route