module.exports = (Sequelize, DataTypes) => {
  const Products = Sequelize.define("Products", {
    category: {
      type: DataTypes.ENUM("Pain Relief", "Antibiotics", "Allergy and Sinus", "Digestive Health", "Vitamins and Supplements", "Cold and Flu", "Skin Care", "First Aid", "userDiabetes Care", "Heart Health", "Men's Health"),
      defaultValue: "Pain Relief",
    },
    productName: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    description: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    activeIngredients: DataTypes.STRING,
    dosageForm: DataTypes.STRING,
    strength: DataTypes.STRING,
    packaging: DataTypes.STRING,
    expiryDate: DataTypes.DATE,
    imageURL: DataTypes.STRING,
    codebar: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
  });
  return Products;
};
