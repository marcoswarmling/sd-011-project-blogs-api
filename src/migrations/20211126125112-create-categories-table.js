'use strict';

const TABLE_NAME = 'Categories'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoriesTable = await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });

    return categoriesTable;
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable(TABLE_NAME)
};
