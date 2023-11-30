const route = require("express").Router();
const {
  getAll,
  getOne,
  create,
  getAllDeclaredMissed,
  getOrderPerMonth,
  updateOrder,
  deleteOne,
  getByUserId,
  calculateTotalAmount,
  getDailyOrderCount,
  getALL
  // calculateDailyOrderAmount
} = require("../controller/orders.controller");

route.get("/gelAllOrders/:email", getAll);
route.get("/getAll", getALL);

route.get("/oneOrder/:id", getOne);
route.get("/getById/:prodId", getByUserId);
route.get("/getById/:userId",getByUserId)

route.get("/getMissed", getAllDeclaredMissed);
route.get("/getPerMonth", getOrderPerMonth);
route.get("/totalOrder", calculateTotalAmount)
// route.get('/dailyOrderCount', getDailyOrderCount);
route.get('/dailyTotalOrder/:email', getDailyOrderCount);
route.patch("/update/:id", updateOrder);
route.post("/createOrder", create);
route.delete("/deleteOrder/:id", deleteOne);

module.exports = route;
