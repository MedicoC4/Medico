const route = require('express').Router()
const {getAvaibility,getAivabilityOfDay,updateAvaibility} = require("../controller/appointement.controller")

route.put("/update/:idHour", updateAvaibility)
route.get("/:dayId", getAvaibility)
route.get("/hours/:aiv/:dayId", getAivabilityOfDay)


module.exports = route