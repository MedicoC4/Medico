const route = require('express').Router()
const {getAll , getOne ,change , add, migrateDoctor, updateLocation,getAivableDoc,recordsDoc, updateSpeciality, docImage, verficationDoc , drop} = require("../controller/doctor.controller")




route.get("/getAll", getAll)
route.get("/getOneDoc/:email", getOne)
route.post("/addDoc", add)
route.put("/updateDoc/:id" , change)
route.post("/migrationDoctor",migrateDoctor)
route.patch("/updateLocation" , updateLocation)
route.patch("/updateSpeciality" , updateSpeciality)
route.get("/docLocation/:blockDoc/:verefDoc" , getAivableDoc)
route.post('/updateRecords', recordsDoc)
route.patch('/updateImage' , docImage)
route.patch('/verficationDoc' , verficationDoc)
route.delete('/deleteDoc/:id' , drop)

module.exports = route