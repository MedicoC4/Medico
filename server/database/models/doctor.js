module.exports = (Sequelize, DataTypes) => {
  const Doctor = Sequelize.define("Doctor", {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("doctor", "nurse"),
      defaultValue: "doctor",
    },
    lang: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    lat: {
      type: DataTypes.DECIMAL(10, 2), 
      allowNull: false,
    },
  });
  return Doctor;
};
