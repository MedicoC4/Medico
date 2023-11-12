module.exports = (Sequelize, DataTypes) => {
    const User = Sequelize.define("User", {
          username: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          type: {
            type: DataTypes.ENUM('doctor', 'user'),
              defaultValue: "user"
          },
          imgUrl: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          createdAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
          },
          updatedAt:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
          },
          lang: {
            type: DataTypes.DOUBLE, 
            allowNull: true,

          },
          lat: {
            type: DataTypes.DOUBLE, 
            allowNull: true,

          },
    })
    return User
}
