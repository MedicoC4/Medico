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
  update: async (req, res) => {
    let id = req.params.id;
    let { orderStatus } = req.body; // Assuming you only want to update the orderStatus field
  
    try {
      const updatedOrder = await Order.update(
        { orderStatus },
        {
          where: { order_id: id },
          returning: true, // This ensures that the updated order is returned
        }
      );
  
      if (updatedOrder[0] === 0) {
        // If no rows were updated, it means the order with the given id was not found
        res.status(404).json({ success: false, message: 'Order not found' });
        return;
      }
  
      res.json(updatedOrder[1][0]); // Return the updated order
    } catch (error) {
      console.error('Error updating order:', error.message);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
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
  }
};
