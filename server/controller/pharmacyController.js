const {Pharmacy} = require('../database/index')
const { Op } = require("sequelize");


module.exports = {
    getAll: async (req, res) => {
      try {
        const getAll = await Pharmacy.findAll({});
        res.json(getAll);
      } catch (err) {
        console.log("Error al obtener todos los usuarios");
        throw err;
      }
    },
    create: async (req, res) => {
      let pharmacyData = req.body;
     
  
      try {
        const newPharmacy = await Pharmacy.create(pharmacyData);
        res.json(newPharmacy);
      } catch (error) {
        throw error;
      }
    },
    update: async (req, res) => {
      let id = req.params.id;
      let dataToUpdate = req.body;
      try {
        const updatedPharmacy = await Pharmacy.update(dataToUpdate, {
          where: { id: Number(id) },
        });
        res.json(updatedPharmacy);
        } catch (error) {
        throw error;
      }
    },
    deleteOne: async (req, res) => {
      let id = req.params.id;
      try {
        const deletedPharmacy = await Pharmacy.destroy({
          where: { id: Number(id) },
        });
        res.json(deletedPharmacy);
      } catch (error) {
        throw error;
      }
    },
    migratePharmacy : async()=>{
      try {
          const added = await Pharmacy.create(req.body)
        console.log('this isthe added',added);
      const onePharm = await User.update({type : "Pharmacy",PharmacyId:added.id},{where: {email : req.body.email}});
          res.json(onePharm);
      } catch (error) {
          throw error
      }
  },
  getAivablePharma: async (req, res) => {
    try {
      const getPharma = await Pharmacy.findAll({
        where: {
        isBlocked: { [Op.like]: req.params.blockPharma },
        isverified: { [Op.like]: req.params.verefPharma },
        },
      });
      res.status(200).send(getPharma)
    } catch (error) {
      throw new Error(error);
    }
  },
  updataLongLat:async (req, res) => {
    try {
      const longLat = await Pharmacy.update(req.body,{where:{id:req.params.idPharmcy}})
      res.json(longLat)
    } catch (error) {
      throw new Error(error)
    }
  },
  updateLocation : async(req , res)=>{
    try {
         const oneDoc = await User.findOne({where: {email : req.body.email}});
         const doc = await User.update({longitude :req.body.longitude, latitude: req.body.latitude},{where: {DoctorId : oneDoc.DoctorId}});
        res.json(oneDoc);
    } catch (error) {
        
    }
},
recordsDoc : async(req , res)=>{
    try {
        const onePharm = await User.findOne({where: {email : req.body.email}});

       const allDocs= req.body.Record.map((pharm)=>{
          return  {
                ...pharm,
                PharmacyId : onePharm.PharmacyId
            }
        })
    } catch (error) {
        
    }
}
  };
