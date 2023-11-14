const { Order, Missing, Products } = require("../database/index.js");

module.exports = {
  getAll: async (req, res) => {
    try {
      const { id } = req.params;

      const getAll = await Order.findAll({
        // where: {
        //   order_id: id,
        // },
      });

      res.json(getAll);
    } catch (err) {
      console.log("Error al obtener todos los usuarios");
      throw err;
    }
  },
  create: async (req, res) => {
    let userData = req.body;
    try {
      const newOrder= await Order.create(userData);
      const newProduct= await Products.findOne({id:newOrder.ProductId});
      const checkMissing = await Missing.findOne({codebar:newProduct.codebar});
   
      
        const missing = await Missing.update({order: checkMissing.order + 1}, {
          where: { codebar:newProduct.codebar },
        });
      
      res.json(newOrder);
    } catch (error) {
      throw error;
    }
  },
  update: async (req, res) => {
    let id = req.params.id;
    let dataToUpdate = req.body;
    try {
      const updatedUser = await Order.update(dataToUpdate, {
        where: { id: Number(id) },
      });
      res.json(updatedUser);
    } catch (error) {
      throw error;
    }
  },
  deleteOne: async (req, res) => {
    let id = req.params.id;
    try {
      const deletedUser = await Order.destroy({
        where: { order_id: id },
      });
      res.json(deletedUser);
    } catch (error) {
      throw error;
    }
  },
  SignIn: async (req, res) => {
    let userData = req.body;

    try {
      const emailExist = await Order.findOne({
        where: { email: userData.email },
        include: Doctor,
      });
      if (!emailExist) {
        return res.status(400).send({ message: "email is not valid" });
      }
      res.json(emailExist);
    } catch (error) {
      throw error;
    }
  },
};
