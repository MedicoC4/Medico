module.exports = (Sequelize, DataTypes) => {
    const Missing = Sequelize.define("Missing", {
        quota: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
      },
      order: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
      },
      codebar: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }, 
      
    });
    Missing.afterCreate(async(instance) => {
        // Calculate the sum and update the sumColumn before creating
        instance.quota = instance.quantity / instance.order;
        await instance.save();
      });
      
      Missing.afterUpdate(async(instance) => {
        // Calculate the sum and update the sumColumn before updating
        if(instance.changed(instance.quantity)||instance.changed(instance.order)){
            
            instance.quota = instance.quantity / instance.order;
            await instance.save();

        }
      });
    return Missing;
  };
  