const { Sequelize, DataTypes } = require("sequelize");


const connection = new Sequelize("medico", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});


connection
  .authenticate()
  .then(() => console.log("connection established"))
  .catch(() => console.log("connection rejected"));




const db ={}


// connection
//   .sync({force: true , alter : true })
//   .then(() => console.log("tables created"))
//   .catch((error) => {throw error;});

module.exports = db

