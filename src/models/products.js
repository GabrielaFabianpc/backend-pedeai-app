'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.Restaurants, {
        foreignKey: "restaurant_id",
        onDelete: "CASCADE"
      });
      Products.hasMany(models.Orders, {
        foreignKey: "product_id",
      })
    }
  }
  Products.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.FLOAT,
    restaurant_id: DataTypes.INTEGER,
    canceled_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};