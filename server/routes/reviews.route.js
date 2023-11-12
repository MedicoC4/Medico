const route = require('express').Router()
const {getAll,create,update,deleteOne} = require('../controller/review.controller')


route.get('/getAll',getAll)
route.post('/createRev',create)
route.put('/updateRev/:id',update)
route.delete('/deleteRev/:id',deleteOne)


module.exports=route