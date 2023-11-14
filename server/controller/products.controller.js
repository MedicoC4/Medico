const { get } = require("dottie");
const { Products, Missing } = require("../database/index");

module.exports = {
  getAll: async (req, res) => {
    try {
      const getAll = await Products.findAll({

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
      const newProduct = await Products.create(product);
      const checkMissing = await Missing.findOne({codebar:newProduct.codebar});
      if (!checkMissing) {
        const missing = await Missing.create({codebar:newProduct.codebar,quantity:newProduct.stock});
      }
      if (checkMissing) {
        const missing = await Missing.update({quantity:newProduct.stock + checkMissing.quantity}, {
          where: { codebar:newProduct.codebar },
        });
      }
    
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
      const getProd = await Products.findOne( {
        where: { id: Number(id) },
      }); 
      const checkMissing = await Missing.findOne({codebar:getProd.codebar});
      if (getProd && getProd.stock < req.body.stock) {
        let diff = req.body.stock - getProd.stock;
        const missing = await Missing.update({quantity:diff + checkMissing.quantity}, {
          where: { codebar:getProd.codebar },
        });
      }
      if (getProd && getProd.stock > req.body.stock) {
        let diff = getProd.stock - req.body.stock ;
        const missing = await Missing.update({quantity: checkMissing.quantity - diff}, {
          where: { codebar:getProd.codebar },
        });
      }
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
