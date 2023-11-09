const route = require('express').Router()
const {getAll,create,update,deleteOne} = require('../controller/pharmacyController')


route.get('/getAll',getAll)
route.post('/createPhar',create)
route.put('/updatePharmacy/:id',update)
route.delete('/deletePharmacy/:id',deleteOne)


module.exports=route