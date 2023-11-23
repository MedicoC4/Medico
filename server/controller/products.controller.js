const { Products, Missing, User, Pharmacy } = require("../database/index");
const missing = require("../database/models/missing");
const {Op, where} = require("sequelize")

module.exports = {
  getAll: async (req, res) => {
    try {
      const getAll = await Products.findAll({ include: { model: Pharmacy } });

      res.json(getAll);
    } catch (err) {
      console.log("Error al obtener todos los productos", err);
      res.status(500).json({ error: "Error al obtener todos los productos" });
    }
  },
  pharmacyProduct: async (req, res) => {
    try {
      const users = await User.findAll({
        where: { email: req.params.email },
      });

      if (users.length === 0) {
        return res.status(404).json({ error: "User not found." });
      }

      const pharmacyId = users[0].PharmacyId; // Assuming there's only one user with the given email

      const products = await Products.findAll({
        where: {
          PharmacyId: pharmacyId,
        },
      });

      res.json(products);
    } catch (error) {
      console.error("Error fetching pharmacy products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getOne: async (req, res) => {
    try {
      const getOne = await Products.findOne({
        where: { id: req.params.id },
      });
      res.json(getOne);
    } catch (error) {
      throw error;
    }
  },
  create: async (req, res) => {
    let product = req.body;
    try {
      const findUser = await User.findOne({ where: { email: req.body.email } });
      console.log(findUser, "this is the use found");
      const newProduct = await Products.create({
        ...product,
        PharmacyId: findUser.PharmacyId,
      });
      console.log(newProduct.codebar);
      const checkMissing = await Missing.findOne({
        where: { codebar: newProduct.codebar },
      });
      console.log("checkMissing");
      if (checkMissing) {
        console.log("checkMissing exist", checkMissing);
        const done = await checkMissing.update(
          { quantity: newProduct.stock + checkMissing.quantity },
          { where: { codebar: newProduct.codebar } }
        );
        checkMissing.quota = checkMissing.quantity / checkMissing.order;
        await checkMissing.save();
      }
      if (!checkMissing) {
        console.log(" not checkMissing exist", checkMissing);
        const data = await Missing.create({
          codebar: newProduct.codebar,
          quantity: newProduct.stock,
        });
      }

      res.status(200).send(checkMissing);
    } catch (error) {
      console.log("Error en el servidor", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  },
  update: async (req, res) => {
    let id = req.params.id;
    let dataToUpdate = req.body;
    try {
      const getProd = await Products.findOne({
        where: { id: Number(id) },
      });
      const checkMissing = await Missing.findOne({
        where: { codebar: getProd.codebar },
      });
      if (getProd && getProd.stock < req.body.stock) {
        console.log("ooutside");
        let diff = req.body.stock - getProd.stock;
        await checkMissing.update(
          { quantity: diff + checkMissing.quantity },
          { where: { codebar: getProd.codebar } }
        );
        checkMissing.quota = checkMissing.quantity / checkMissing.order;
        await checkMissing.save();
      }
      if (getProd && getProd.stock > req.body.stock) {
        console.log("INSIDE");
        let diff = getProd.stock - req.body.stock;
        await checkMissing.update(
          { quantity: checkMissing.quantity - diff },
          { where: { codebar: getProd.codebar } }
        );
        checkMissing.quota = checkMissing.quantity / checkMissing.order;
        await checkMissing.save();
      }
      const updatedProduct = await Products.update(dataToUpdate, {
        where: { id: Number(id) },
      });
      res.json(checkMissing);
    } catch (error) {
      console.log("Error en el servidor", error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  },
  updateQ: async (req, res) => {
    try {
      const upd = await Products.update(req.body, {
        where: { id: req.params.id },
      });
      res.json(upd);
    } catch (error) {
      throw error;
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
  findOneMissing: async (req, res) => {
    try {
      const pharmacy = await User.findOne({where:{email:req.params.emailpharmacyOne}})
      res.json(pharmacy)
    } catch (error) {
      throw error
    }
  },
  
  controlMissing: async (req, res) => {
    try {
      const {productName, price, stock, description, manufacturer, activeIngredients, dosageForm, strength, packaging, expiryDate, imageURL, sideEffect, codebar, CategoryId } = req.body;
      const pharmacy = await User.findOne({where:{email:req.params.emailpharmacy}})
      const checkProduct = await Products.findOne({where:{ 
        PharmacyId: {[Op.like]:pharmacy.PharmacyId},
        codebar: {[Op.like]:req.params.codebarMissing},
        // stock: {[Op.lte]: 0}
      }
      })
      // if(checkProduct) {
      //   if (checkProduct.stock <= 0) {
      //     const update = await Products.update({stock: stock}, {where: {PharmacyId: pharmacy.PharmacyId}})
      //     res.json(update)
      //   } 
      // } 
      // if (!checkProduct) {
      //   const create = await Products.create({productName:productName, price:price, description:description; manufacturer:manufacturer, activeIngredients:activeIngredients, dosageForm:dosageForm, strength:strength, packaging:packaging,expiryDate:expiryDate,  imageURL:imageURL,sideEffect:sideEffect, codebar:codebar, CategoryId:CategoryId, PharmacyId:pharmacy.PharmacyId})
      //   res.json(create)
      // }
      // if (checkProduct) {
      //   res.json(true)
      // } else {
      //   res.json(false)
      // }
      res.json(checkProduct)
    } catch (error) {
      throw error
    }
  }
};
