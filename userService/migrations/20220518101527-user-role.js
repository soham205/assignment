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
      user_name: {
        type: Sequelize.STRING(700),
        allowNull: true,
      },
      wallet_address: {
        type: Sequelize.STRING(700),
        allowNull: false,
        unique: true
      },
      avtar_url: {
        type: Sequelize.STRING(700),
        allowNull: true,
      },
      avtar_url_key: {
        type: Sequelize.STRING(700),
        allowNull: true,
      },
      nonce: {
        type: Sequelize.STRING(300),
        allowNull: false,
      },
      is_confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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