'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Restaurants.hasMany(models.Products, {
        foreignKey: "restaurant_id"
      });
      Restaurants.hasMany(models.Orders, {
        foreignKey: "restaurant_id"
      })
    }
  }
  Restaurants.init({
    username: {
    type: DataTypes.STRING,
    unique: true
    },
    email:{
      type: DataTypes.STRING,
      unique: true
      },
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    has_service_tax: DataTypes.BOOLEAN,
    canceled_at: {
      type: DataTypes.BOOLEAN,
      defaultValue: null
      },
  }, {
    sequelize,
    modelName: 'Restaurants',
  });
  return Restaurants;
};