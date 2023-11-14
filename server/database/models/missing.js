module.exports = (Sequelize, DataTypes) => {
    const Missing = Sequelize.define("Missing", {
        quota: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
      },
      order: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      codebar: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }, 
      
    });
    Missing.afterCreate((instance) => {
        // Calculate the sum and update the sumColumn before creating
        instance.quota = instance.quantity /instance.order;
      });
      
      Missing.afterUpdate((instance) => {
        // Calculate the sum and update the sumColumn before updating
        instance.quota = instance.quantity /instance.order;
      });
    return Missing;
  };
  