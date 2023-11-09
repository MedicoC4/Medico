const {Product} = require ('../database/index')

module.exports = {
    getAll: async (req, res) => {
      try {
        const getAll = await Product.findAll({});
        res.json(getAll);
      } catch (err) {
        console.log("Error al obtener todos los usuarios");
        throw err;
      }
    },
    create: async (req, res) => {
      let productData = req.body;
      if (!productData.productName || !productData.price || !productData.description) {
        return res.status(400).send({ message: "user not found" });
      }
      try {
        const newProduct = await Product.create(productData);
        res.json(newProduct);
      } catch (error) {
        throw error;
      }
    },
    update: async (req, res) => {
      let id = req.params.id;
      let dataToUpdate = req.body;
      try {
        const updatedProduct = await Product.update(dataToUpdate, {
          where: { id: Number(id) },
        });
        res.json(updatedProduct);
        } catch (error) {
        throw error;
      }
    },
    deleteOne: async (req, res) => {
      let id = req.params.id;
      try {
        const deletedProduct = await Product.destroy({
          where: { id: Number(id) },
        });
        res.json(deletedProduct);
      } catch (error) {
        throw error;
      }
    }
  };
