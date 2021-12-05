'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const TablePostCategory = queryInterface.createTable('PostsCategories', {
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'BlogPosts',
          key: 'id',
        }
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
      },
    });
    return await TablePostCategory;
  },

  down: async (queryInterface, _Sequelize) => {
    return await queryInterface.dropTable('PostsCategories');
  }
};
