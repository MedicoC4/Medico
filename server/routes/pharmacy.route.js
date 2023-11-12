const route = require('express').Router()
const {getAll,create,update,deleteOne, migratePharmacy, updateLocation, recordsDoc} = require('../controller/pharmacyController')


route.get('/getAll',getAll)
route.post('/createPhar',create)
route.put('/updatePharmacy/:id',update)
route.delete('/deletePharmacy/:id',deleteOne)
route.post("/migratePharm" , migratePharmacy)
route.put("/updateLocation" , updateLocation)
route.put("/updatRecords" , recordsDoc)

module.exports=route