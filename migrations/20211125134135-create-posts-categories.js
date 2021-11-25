module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('PostsCategories', {
      postId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
          model: 'Categories',
          key: 'id',
        }
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('PostsCategories');
  },
};