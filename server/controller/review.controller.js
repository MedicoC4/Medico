const {Review} = require('../database/index')


module.exports = {
    getAll: async (req, res) => {
      try {
        const getAll = await Review.findAll({});
        res.json(getAll);
      } catch (err) {
        console.log("Error al obtener todos los usuarios");
        throw err;
      }
    },
    create: async (req, res) => {
      let ReviewData = req.body;
     
  
      try {
        const newReview = await Review.create(ReviewData);
        res.json(newReview);
      } catch (error) {
        throw error;
      }
    },
    update: async (req, res) => {
      let id = req.params.id;
      let dataToUpdate = req.body;
      try {
        const updatedReview = await Review.update(dataToUpdate, {
          where: { id: Number(id) },
        });
        res.json(updatedReview);
        } catch (error) {
        throw error;
      }
    },
    deleteOne: async (req, res) => {
      let id = req.params.id;
      try {
        const deletedReview = await Review.destroy({
          where: { id: Number(id) },
        });
        res.json(deletedReview);
      } catch (error) {
        throw error;
      }
    }
  };
