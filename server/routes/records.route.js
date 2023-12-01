const route = require('express').Router()

const { getAll, createDocs, getOneRecDoc, getOneRecPharm } = require('../controller/records.controller')



route.get('/getAll' , getAll)
route.post('/createDocs' , createDocs)
route.get('/getOneRecDoc/:email' , getOneRecDoc)
route.get('/getOneRecPharm/:email' , getOneRecPharm)



module.exports = route