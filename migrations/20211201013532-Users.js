'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UsersTable = queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      displayName: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      password: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      image: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
    return UsersTable;
  },

  down: async (queryInterface, _Sequelize) => {
    queryInterface.dropTable('Users');
  },
};
