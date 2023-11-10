const route = require('express').Router()
const {getAll,create,update,deleteOne, migratePharmacy} = require('../controller/pharmacyController')


route.get('/getAll',getAll)
route.post('/createPhar',create)
route.put('/updatePharmacy/:id',update)
route.delete('/deletePharmacy/:id',deleteOne)
route.post("/migratePharm" , migratePharmacy)


module.exports=route