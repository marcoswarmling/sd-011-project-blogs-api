'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        isDate: true,
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        isDate: true,
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('BlogPosts');
  }
};