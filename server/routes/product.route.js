const route = require('express').Router();
const {getAll, create, update, deleteOne, getProductByCodebar} = require("../controller/products.controller");

route.get("/getAll", getAll);
route.post("/createProduct", create);
route.put("/updateProduct/:id", update);
route.delete("/deleteProduct/:id", deleteOne);
route.get("/getProductByCodebar/:codebar", getProductByCodebar);

module.exports = route;