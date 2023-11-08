const { User } = require("../database/index");

module.exports = {
  getAll: async (req, res) => {
    try {
      const getAll = await User.findAll({});
      res.json(getAll);
    } catch (err) {
      console.log("Error al obtener todos los usuarios");
      throw err;
    }
  },
  create: async (req, res) => {
    let userData = req.body;
    if (!userData.username || !userData.email || !userData.password) {
      return res.status(400).send({ message: "user not found" });
    }

    try {
      const emailExist = await User.findOne({
        where: { email: userData.email },
      });
      if (emailExist) {
        return res.status(500).send({ message: "El correo ya existe" });
      }
      const newUser = await User.create(userData);
      res.json(newUser);
    } catch (error) {
      throw error;
    }
  },
  update: async (req, res) => {
    let id = req.params.id;
    let dataToUpdate = req.body;
    try {
      const updatedUser = await User.update(dataToUpdate, {
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
      const deletedUser = await User.destroy({
        where: { id: Number(id) },
      });
      res.json(deletedUser);
    } catch (error) {
      throw error;
    }
  }
};
