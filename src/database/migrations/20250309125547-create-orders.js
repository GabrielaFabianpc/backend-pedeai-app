'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {model: "Products", key: "id" },
        onDelete: "CASCADE"
      },
      amount: {
        type: Sequelize.INTEGER
      },
      total_price: {
        type: Sequelize.FLOAT
      },
      total_service_price: {
        type: Sequelize.FLOAT
      },
      restaurant_id: {
        type: Sequelize.INTEGER,
        references: {model: "Restaurants", key: "id"},
        onDelete: "CASCADE"
      },
      buyer_id: {
        type: Sequelize.INTEGER,
        references: {model: "Buyers", key: "id"},
        onDelete: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};