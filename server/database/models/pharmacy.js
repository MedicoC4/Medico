module.exports = (Sequelize, DataTypes) => {
    const Pharmacy = Sequelize.define("Pharmacy", {
      PHname: {
        type: DataTypes.STRING,
        
      },
      imageUrl: {
        type: DataTypes.STRING,
        
      },
      type: {
        type: DataTypes.ENUM("night", "day"),
        
      },
      longitude: {
        type: DataTypes.DOUBLE, 
        
      },
      latitude: {
        type: DataTypes.DOUBLE, 
        
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
  