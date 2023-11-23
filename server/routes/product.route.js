const route = require('express').Router();
const {getAll, create, update, deleteOne, getProductByCodebar,searchByName,searchNameLike,searchByBarcodeNoDup,searchAllByBarcodeNoDup} = require("../controller/products.controller");

route.get("/getAll", getAll);
route.post("/createProduct", create);
route.put("/updateProduct/:id", update);
route.delete("/deleteProduct/:id", deleteOne);
route.get("/getProductByCodebar/:codebar", getProductByCodebar);
route.get("/getProductByName/:searchByProdName", searchByName);
route.get("/getProductLike/:searchLike", searchNameLike);
route.get("/getCodeBarNoDup/:codeBarNoDup",searchByBarcodeNoDup)
route.get("/getAllCodeBarNoDup/:codeBarAllNoDup",searchAllByBarcodeNoDup)
module.exports = route;