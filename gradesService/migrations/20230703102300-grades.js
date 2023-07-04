'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("courses", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      score: {
        type: Sequelize.STRING(700),
        allowNull: true,
      },
      grade: {
        type: Sequelize.STRING(700),
        allowNull: true,
      },
      userId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'users', // its table"s name, not object name
					key: 'id' // its column"s name
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
      courseId: {
				type: Sequelize.INTEGER,
				references: {
					model: 'courses', // its table"s name, not object name
					key: 'id' // its column"s name
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("courses");
  }
};
