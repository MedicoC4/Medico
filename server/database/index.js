const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config.js")
console.log(config.DB_NAME)
console.log(config.DB_USER)
console.log(config.DB_PASSWORD)

const connection = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  dialect: "mysql",
  host: "localhost",
});


connection
  .authenticate()
  .then(() => console.log("connection established"))
  .catch((error) => {throw error});




const db ={}


// connection
//   .sync({force: true , alter : true })
//   .then(() => console.log("tables created"))
//   .catch((error) => {throw error;});

module.exports = db

