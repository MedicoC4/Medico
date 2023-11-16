module.exports = (Sequelize, DataTypes) => {
    const PharmacyRecords = Sequelize.define("Recordpharm", {
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      file: {
        type: DataTypes.STRING,
        allowNull: false
      },
     name : {
      type: DataTypes.STRING,
     }
    });
    return PharmacyRecords;
  };
  