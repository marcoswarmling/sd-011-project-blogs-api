'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
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
        type: Sequelize.STRING,
      },
      published: {
        type: Sequelize.DATE
      },
      updated: {
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'userId',
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      // NÃO TEM NECESSIDADE ISSO É NA QUERY
      // categoryIds: {
      //   type: Sequelize.INTEGER,
      //   field: 'categoryIds',
      //   references: {
      //     model: 'Categories',
      //     key: 'id',
      //   }
      // },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};