'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        field: 'postId',
        references: {
          model: 'BlogPosts',
          key: 'id'
        },
      },
        categoryId: {
          type: Sequelize.INTEGER,
          field: 'categoryId',
          references: {
            model: 'Categories',
            key: 'id'
          },
      },
      // onUpdate: 'CASCADE',
      // primaryKey: true,
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};