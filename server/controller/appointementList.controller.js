const { AppointementList } = require("../database/index");
module.exports = {
    updateStatus: async (req,res)=>{
        try {
            const updateStatus = await AppointementList.update(req.body,{where:{id:req.params.idAppoint}})
            res.json(updateStatus)
        } catch (error) {
            throw new Error(error)
        }
      },
    postAppointement: async (req,res)=>{
        try {
            const addAppointement = await AppointementList.create(req.body)
            res.json(addAppointement)
        } catch (error) {
            throw new Error(error)
        }
      },
}