module.exports = (Sequelize, DataTypes) => {
    const Day = Sequelize.define("Day", {
      day: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    });
    return Day;
  };
  