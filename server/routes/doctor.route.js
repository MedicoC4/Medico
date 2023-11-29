const route = require('express').Router()
const {getAll , getOne , drop , change , add, migrateDoctor, updateLocation,getAivableDoc,recordsDoc, updateSpeciality,verficationDoc, docImage,getAivableDocMapeed,getAivableDocMapeedAll,getAllCategory,findDocWithId} = require("../controller/doctor.controller")




route.get("/getAll", getAll)
route.get("/getOneDoc/:email", getOne)
route.post("/addDoc", add)
route.put("/updateDoc/:id" , change)
route.post("/migrationDoctor",migrateDoctor)
route.patch("/updateLocation" , updateLocation)
route.patch("/updateSpeciality" , updateSpeciality)
route.get("/docLocation/:blockDoc/:verefDoc" , getAivableDoc)
route.get("/docLocationMapped/:verifyDoctorr/:blockDoctorr/:mapDocType" , getAivableDocMapeed)
route.get("/docLocationMappedAll/:verifyDoctorrAll/:blockDoctorrAll" , getAivableDocMapeedAll)
route.get("/docLocationMappedAllCategory/:verifyDoctorrAllCategory/:blockDoctorrAllCategory/:specialDocAll" , getAllCategory)
route.post('/updateRecords', recordsDoc)
route.patch('/updateImage' , docImage)
route.patch('/verficationDoc' , verficationDoc)
route.delete('/deleteDoc/:id' , drop)
route.get("/getOneWithId/:idDocMap",findDocWithId)


module.exports = route