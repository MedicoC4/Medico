const { Products } = require("../database/index");

module.exports = {
  getAll: async (req, res) => {
    try {
      const getAll = await Products.findAll({});
      res.json(getAll);
    } catch (err) {
      console.log("Error al obtener todos los productos", err);
      res.status(500).json({ error: "Error al obtener todos los productos" });
    }
  },
  getOne: async (req, res) => {
    try {
      const getOne = await Products.findOne({
        where: { id: req.params.id },
      });
      res.json(getOne);
    } catch (error) {
      throw error;
    }
  },
  create: async (req, res) => {
    let product = req.body;
    try {
      const newProduct = await Products.create(product);
      res.json(newProduct);
    } catch (error) {
      console.log("Error en el servidor", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  },
  update: async (req, res) => {
    let id = req.params.id;
    let dataToUpdate = req.body;
    try {
      const updatedProduct = await Products.update(dataToUpdate, {
        where: { id: Number(id) },
      });
      res.json(updatedProduct);
    } catch (error) {
      console.log("Error en el servidor", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  },
  deleteOne: async (req, res) => {
    let id = req.params.id;
    try {
      const deletedProduct = await Products.destroy({
        where: { id: Number(id) },
      });
      res.json(deletedProduct);
    } catch (error) {
      console.log("Error en el servidor", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  },
};
