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
    age: {
      type: DataTypes.INTEGER
    },
    longitude: {
      type: DataTypes.DOUBLE,
      defaultValue:0
 
    },
    latitude: {
      type: DataTypes.DOUBLE, 
      defaultValue:0

    },
    isBlocked :{
    type : DataTypes.BOOLEAN,
    defaultValue: true
    },
    yx: {
      type: DataTypes.STRING,
    },
    isverified: {
      type:DataTypes.BOOLEAN,
      defaultValue: false
    },
    // speciality: {
    //   type: DataTypes.ENUM("Generalist" ,'Cardiologist', 'Dermatologist', "Orthopedic Surgeon", "Gastroenterologist", "Ophthalmologist", "Neurologist", "Psychiatrist", "Rheumatologist"),
    //     defaultValue: "Generalist"
    // },
  });
  return Doctor;
};
