const { Products, Missing , User} = require("../database/index");

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
      const findUser = await User.findOne({where : {email: req.body.email}})
      const newProduct = await Products.create({...product, PharmacyId: findUser.id});
      const checkMissing = await Missing.findOne({codebar:newProduct.codebar});
      if (!checkMissing) {
       await Missing.create({codebar:newProduct.codebar,quantity:newProduct.stock});
      }
      if (checkMissing) {
        console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
         await checkMissing.update({quantity:newProduct.stock + checkMissing.quantity});
     
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
        checkMissing.update({quantity:diff + checkMissing.quantity});
      }
      if (getProd && getProd.stock > req.body.stock) {
        let diff = getProd.stock - req.body.stock ;
      await checkMissing.update({quantity: checkMissing.quantity - diff});
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
