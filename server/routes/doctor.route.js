const route = require('express').Router()
const {getAll , getOne , drop , change , add} = require("../controller/doctor.controller")




route.get("/getAll", getAll)
route.get("/getOneDoc/:id", getOne)
// route.drop("/deleteDoc/:id", drop)
route.post("/addDoc", add)
route.put("/updateDoc" , change)








module.exports = route