const route = require('express').Router()

const { getAll, createDocs } = require('../controller/pharmRecords')



route.get('/getAll' , getAll)
route.post('/createDocs' , createDocs)




module.exports = route