'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'PostsCategories',
      {
        post_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'BlogPosts',
            key: 'id',
          },
          onDelete: 'CASCADE',
          primaryKey: true,
        },
        category_id: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories',
            key: 'id',
          },
          onDelete: 'CASCADE',
          primaryKey: true,
        },
      }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
