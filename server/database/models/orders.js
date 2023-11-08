module.exports = (Sequelize, DataTypes) => {
  const Orders = Sequelize.define("Orders", {
    quantityOrdered: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    orderStatus: {
      type: DataTypes.ENUM("Accepted", "Rejected","Pending"),
      defaultValue: "Pending",
    },
    livraisonStatus: {
        type: DataTypes.ENUM('Pending', 'Processing', 'Shipped', 'Out for Delivery', 'Delivered'),
        defaultValue: "Pending",
    },
    tracking_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    acceptedAt: {
        type:DataTypes.DATE
    },
    dilevredAt: {
        type:DataTypes.DATE
    }
  });
  return Orders;
};
