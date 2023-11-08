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
    })
    return User
}
