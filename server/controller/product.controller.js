const { Product } = require("../database/index");

module.exports = {
  getAll: async (req, res) => {
    try {
      const getAll = await Product.findAll({
        attributes: [
          [sequelize.literal("DATE_FORMAT(createdAt, '%Y-%m-%d ')"), 'CreatedAt'],
          [sequelize.literal("DATE_FORMAT(updatedAt, '%Y-%m-%d')"), 'UpdatedAt'],
          // Include other attributes as needed
        ],
        raw: true,
      });
      res.json(getAll);
    } catch (err) {
      console.log("Error al obtener todos los productos", err);
      res.status(500).json({ error: "Error al obtener todos los productos" });
    }
  },
  create: async (req, res) => {
    let product = req.body;
    try {
      const newProduct = await Product.create(product);
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
      const updatedProduct = await Product.update(dataToUpdate, {
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
      const deletedProduct = await Product.destroy({
        where: { id: Number(id) },
      });
      res.json(deletedProduct);
    } catch (error) {
      console.log("Error en el servidor", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  },
};
