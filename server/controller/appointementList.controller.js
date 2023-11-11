const { AppointementList,Doctor,User,Availability,Day } = require("../database/index");
const { Op } = require("sequelize");


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
    getAppointement: async (req,res)=>{
        try {
            const getAppointement = await AppointementList.findAll({
                where: {
                    status: { [Op.like]: req.params.status },
                    DoctorId: { [Op.like]: req.params.Docid },
                  },
                  include: [
                    {
                      model: Doctor,
                    },
                    {
                      model: User,
                    },
                    {
                      model: Availability,
                    },
                    {
                      model: Day,
                    },
                  ],
              });
            res.json(getAppointement)
        } catch (error) {
            throw new Error(error)
        }
      },
}