'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const postsCategorie = queryInterface.createTable("PostsCategories", {
      postId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'BlogPosts',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    })

    return postsCategorie;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('PostsCategories');
  }
};
