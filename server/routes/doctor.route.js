const route = require('express').Router()
const {getAll , getOne , drop , change , add, migrateDoctor, updateLocation,getAivableDoc,recordsDoc, updateSpeciality, docImage,getAivableDocMapeed,getAivableDocMapeedAll} = require("../controller/doctor.controller")




route.get("/getAll", getAll)
route.get("/getOneDoc/:email", getOne)
// route.drop("/deleteDoc/:id", drop)
route.post("/addDoc", add)
route.put("/updateDoc/:id" , change)
route.post("/migrationDoctor",migrateDoctor)
route.patch("/updateLocation" , updateLocation)
route.patch("/updateSpeciality" , updateSpeciality)
route.get("/docLocation/:blockDoc/:verefDoc" , getAivableDoc)
route.get("/docLocationMapped/:verifyDoctorr/:blockDoctorr/:mapDocType" , getAivableDocMapeed)
route.get("/docLocationMappedAll/:verifyDoctorrAll/:blockDoctorrAll" , getAivableDocMapeedAll)
route.post('/updateRecords', recordsDoc)
route.patch('/updateImage' , docImage)



module.exports = route