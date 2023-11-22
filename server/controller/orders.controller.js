const {
  Order,
  Missing,
  Products,
  User,
  Pharmacy,
} = require("../database/index.js");

module.exports = {
  getAll: async (req, res) => {
    try {
      const { id } = req.params;

      const getAll = await Order.findAll({
        // where: {
        //   order_id: id,
        // },
        include: [{ model: User }, { model: Products }],
      });

      res.json(getAll);
    } catch (err) {
      console.log("Error al obtener todos los usuarios");
      throw err;
    }
  },
  getOne: async (req, res) => {
    try {
      const getOne = await Order.findOne({
        where: { order_id: req.params.id },
        include: [{ model: User }, { model: Products }],
      });
      res.json(getOne);
    } catch (error) {
      throw error;
    }
  },
  // create: async (req, res) => {
  //   let userData = req.body;
  //   try {
  //     const userExist = await User.findOne({
  //       where: { email: req.body.email },
  //     });
  //     const newOrder = await Order.create({
  //       ...userData,
  //       UserId: userExist.id,
  //     });
  //     const newProduct = await Products.findOne({ id: newOrder.ProductId });
  //     const checkMissing = await Missing.findOne({
  //       where: { codebar: newProduct.codebar },
  //     });

  //     await checkMissing.update({ order: checkMissing.order + 1 });
  //     checkMissing.quota = checkMissing.quantity / checkMissing.order;
  //     await checkMissing.save();

  //     res.json(newOrder);
  //   } catch (error) {
  //     throw error;
  //   }
  // },
  getByUserId: async (req, res) => {
    try {
      const { userId } = req.params;
      const userExist = await User.findOne({
        where: { email: userId },
      });
      const userOrders = await Order.findAll({
        where: {
          UserId: userExist.id,
        },
        include: {
          model: Products,
          include: {
            model: Pharmacy,
          },
        },
      });

      res.json(userOrders);
    } catch (err) {
      console.log("Error while fetching orders for user");
      throw err;
    }
  },


  create: async (req, res) => {

    let userData = req.body; 
    try {
      const userExist = await User.findOne({
        where: { email: req.body.email },
      
      });
      const newOrder= await Order.create({...userData,UserId:userExist.id});
      const newProduct= await Products.findOne({id:newOrder.ProductId});
      const checkMissing = await Missing.findOne({where:{codebar:newProduct.codebar}});
   
      
        await checkMissing.update({order: checkMissing.order + 1});
        checkMissing.quota = checkMissing.quantity / checkMissing.order;
        await checkMissing.save();
      
      res.json(newOrder);
    } catch (error) {
      throw error;
    }
  },
  updateOrder: async (req, res) => {
    const { order_id } = req.params; // get the order_id from the request parameters
    const updatedData = req.body; // the new data for the order
  
    try {
      await Order.update(updatedData, {
        where: { id: order_id },
      });
  
      res.json({ message: 'Order updated successfully' });
    } catch (error) {
      console.log('Error while updating order');
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
};
