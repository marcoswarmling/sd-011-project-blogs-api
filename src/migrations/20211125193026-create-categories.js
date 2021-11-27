'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Categories',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      { timestamp: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Categories');
  },
};
