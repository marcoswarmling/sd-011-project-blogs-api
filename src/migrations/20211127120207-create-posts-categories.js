'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('PostsCategories', {
     blogpostId: {
       type: Sequelize.INTEGER,
       references: {
         model:'BlogPosts',
         key: 'id'
       },
       onDelete: 'CASCADE',
       primaryKey: true,
     },
     categoryId: {
      type: Sequelize.INTEGER,
      references: {
        model:'Categories',
        key: 'id'
      },
      onDelete: 'CASCADE',
      primaryKey: true,
     }
   });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
