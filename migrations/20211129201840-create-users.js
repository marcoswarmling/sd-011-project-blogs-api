'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users',
     { 
       id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true, 
      },
      displayName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('Users');
  },
};
