'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.Products, {
        foreignKey: "product_id",
      });
      Orders.belongsTo(models.Restaurants, {
        foreignKey: "restaurant_id"
      });
      Orders.belongsTo(models.Buyers, {
        foreignKey: "buyer_id"
      });
    }
  }
  Orders.init({
    product_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    total_price: DataTypes.FLOAT,
    total_service_price: DataTypes.FLOAT,
    restaurant_id: DataTypes.INTEGER,
    buyer_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};