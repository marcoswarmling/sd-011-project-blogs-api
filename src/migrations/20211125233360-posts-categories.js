'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'BlogPosts',
          key: 'id',
        },
      },
      categoryId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'Categories',
          key: 'id',
        },
      }, 
    }, {
      timestamps: false,
    }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('PostsCategories');
  }
};
