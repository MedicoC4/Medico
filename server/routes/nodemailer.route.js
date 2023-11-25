const route = require('express').Router()

const{getbill,sendOfficialEmail}=require("../controller/nodemailer.controller")

route.post("/send",getbill)
route.post("/sendAccept",sendOfficialEmail)
module.exports = route