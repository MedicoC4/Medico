const {Availability,Day,Doctor} = require("../database/index.js")

module.exports = {
    getAvaibility : async (req, res) => {
        try {
            const getAllOrders = await Doctor.findOne({where:{id:req.params.dayId },include:{
                model:Day,
                include:Availability
            }})
            // const getAll = await Doctor.findAll({include:{ all: true, nested: true }})
             
            res.status(200).send(getAllOrders)
        } catch (error) {
            throw new Error(error)
        }
    }
}