const route = require('express').Router()
const {getAll,create,update,deleteOne} = require('../controller/review.controller')


route.get('/getAll/:doctorId',getAll)
route.post('/createRev',create)
route.delete('/deleteRev/:id',deleteOne)


module.exports=route