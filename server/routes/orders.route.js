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
} = require("../controller/orders.controller");

route.get("/getAll/:email", getAll);
route.get("/oneOrder/:id", getOne);
route.get("/getById/:prodId", getByUserId);
route.get("/getMissed", getAllDeclaredMissed);
route.get("/getPerMonth", getOrderPerMonth);
route.patch("/update/:id", updateOrder);
route.post("/createOrder", create);
route.delete("/deleteOrder/:id", deleteOne);

module.exports = route;
