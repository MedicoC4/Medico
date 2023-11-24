const route = require('express').Router()

const {getAll,create,update,deleteOne, migratePharmacy,getAivablePharma,updataLongLat,updateLocation, recordsDoc,getAivablePharmaDayNight, verficationPharm, fetchAll} = require('../controller/pharmacyController')


route.get('/getAll',getAll)
route.get('/getAllDN/:isBlockPharma/:isVerefPharma/:typeDN',getAivablePharmaDayNight)
route.post('/createPhar',create)
route.put('/updatePharmacy/:id',update)
route.delete('/deletePharmacy/:id',deleteOne)
route.post("/migratePharm" , migratePharmacy)
route.get("/pharmaLocation/:blockPharma/:verefPharma" , getAivablePharma)
route.put("/updateLangLat/:idPharmcy" , updataLongLat)
route.patch("/updateLocation" , updateLocation)
route.post("/updatRecords" , recordsDoc)
route.patch("/verficationPharm" , verficationPharm)
route.get("/fetch" , fetchAll)

module.exports=route