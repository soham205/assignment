"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING(700),
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING(700),
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING(700),
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: Sequelize.DATE,
      },
    })

  },

  async down(queryInterface) {
    await queryInterface.dropTable("users");
  }
};