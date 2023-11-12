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
  };
