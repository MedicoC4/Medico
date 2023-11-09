module.exports = (Sequelize, DataTypes) => {
    const Pharmacy = Sequelize.define("Pharmacy", {
      PHname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM("night", "day"),
        defaultValue: "day",
      },
      lang: {
        type: DataTypes.DECIMAL(10, 2), // The first argument is the total number of digits, and the second is the number of decimal places
        allowNull: false,
      },
      lat: {
        type: DataTypes.DECIMAL(10, 2), 
        allowNull: false,
      },
      adress: {
        type: DataTypes.STRING
      }
    });
    return Pharmacy;
  };
  