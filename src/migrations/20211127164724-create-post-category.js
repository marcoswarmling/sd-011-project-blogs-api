'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostsCategories', {
      postId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'BlogPosts', key: 'id'},//pegando o nomde da tabela na migration
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: 'Categories', key: 'id'},
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('PostCategories');
  }
};