const PostsCategories = (sequelize, DataTypes) => {
  const PostsCategorie = sequelize.define(
    'PostsCategories',
    { postId: DataTypes.INTEGER, categoryId: DataTypes.INTEGER },
    { timestamps: false },
  );
  PostsCategorie.associate = (models) => {
    PostsCategorie.belongsTo(models.BlogPosts, {
      as: 'BlogPost',
      foreignKey: 'postId',
      onDelete: 'CASCADE',
    });
    PostsCategorie.belongsTo(models.Categories, {
      as: 'Category',
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });
  };
  return PostsCategorie;
};

module.exports = PostsCategories;
