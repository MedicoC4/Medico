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
        type: DataTypes.DOUBLE, 
        allowNull: true,
      },
      lat: {
        type: DataTypes.DOUBLE, 
        allowNull: true,
      },
      adress: {
        type: DataTypes.STRING
      },
      isBlocked:{
        type: DataTypes.BOOLEAN,
        defaultValue: true

      },
      isverified:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
    return Pharmacy;
  };
  