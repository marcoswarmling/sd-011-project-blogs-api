'use strict';

const TABLE_NAME = 'PostsCategories';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const postsCategoriesTable = await queryInterface.createTable(TABLE_NAME, {
     postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id'
      }
     },
     categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      references: {
        model: 'Categories',
        key: 'id'
      }
     }
   });

   return postsCategoriesTable;
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable(TABLE_NAME)
};
