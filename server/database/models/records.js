module.exports = (Sequelize, DataTypes) => {
    const Records = Sequelize.define("Record", {
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      file: {
        type: DataTypes.STRING,
        allowNull: false
      },
      yx: {
        type: DataTypes.STRING,
      },
      isverified: {
        type:DataTypes.BOOLEAN,
        defaultValue: false
      },
      speciality: {
        type: DataTypes.ENUM("Generalist" ,'Cardiologist', 'Dermatologist', "Orthopedic Surgeon", "Gastroenterologist", "Ophthalmologist", "Neurologist", "Psychiatrist", "Rheumatologist"),
          defaultValue: "Generalist"
      },
    });
    return Records;
  };
  