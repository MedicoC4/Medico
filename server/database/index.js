const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config.js");
console.log(config.DB_NAME);
console.log(config.DB_USER);
console.log(config.DB_PASSWORD);

const connection = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
  }
);

connection
  .authenticate()
  .then(() => console.log("connection established"))
  .catch((error) => {
    throw error;
  });


const User = require('./models/user.js')(connection, DataTypes)
const Review = require('./models/reviews.js')(connection, DataTypes)
const Record = require('./models/records.js')(connection, DataTypes)
const Product = require('./models/products.js')(connection, DataTypes)
const Pharmacy = require('./models/pharmacy.js')(connection, DataTypes)
const Doctor = require('./models/doctor.js')(connection, DataTypes)
const Order = require('./models/orders.js')(connection, DataTypes)
const Order_user = require('./models/user_order.js')(connection, DataTypes)
const Categories = require('./models/categories.js')(connection, DataTypes)

User.hasOne(Pharmacy)
Pharmacy.belongsTo(User)

Doctor.hasOne(User)
User.belongsTo(Doctor)

User.hasMany(Review)
Review.belongsTo(User)

Doctor.hasMany(Review)
Review.belongsTo(Doctor)

Categories.hasMany(Product)
Product.belongsTo(Categories)

Doctor.hasMany(Record)
Record.belongsTo(Doctor)

Pharmacy.hasMany(Record)
Record.belongsTo(Pharmacy)

Product.hasMany(Record)
Record.belongsTo(Product)

Pharmacy.hasMany(Product)
Product.belongsTo(Pharmacy)

Product.hasMany(Order)
Order.belongsTo(Product)

User.belongsToMany(Order, { through: Order_user });
Order.belongsToMany(User, { through:  Order_user});





// connection
//   .sync({force: true , alter : true })
//   .then(() => console.log("tables created"))
//   .catch((error) => {throw error;});

module.exports = {User, Product, Review, Record, Doctor, Order, Pharmacy, Order_user, Categories};
