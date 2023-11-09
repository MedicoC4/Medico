const {Pharmacy} = require('../database/index')


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
    }
  };
