const PostsCategories = (sequelize, DataTypes) => {
  const PostsCategorie = sequelize.define(
    'Users',
    { postId: DataTypes.INTEGER, categoryId: DataTypes.INTEGER },
    { timestamps: false },
  );
  PostsCategorie.associate = function (models) {
    PostsCategorie.belongsTo(models.BlogPosts, {
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
    PostsCategorie.belongsTo(models.categories, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });
  };
  return PostsCategorie;
};

module.exports = PostsCategories;
