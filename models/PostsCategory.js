module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, { timestamp: false,
     tableName: 'PostCategories' });

  PostsCategory.associate = (models) => {
    models.BlogPost.belongsTo(models.Category, {
      as: 'Categories',
      through: PostsCategory,
      foreignKey: 'id',
      otherKey: 'categoryId',
    });
    models.Category.belongsTo(models.BlogPost, {
      as: 'BlogPosts',
      through: PostsCategory,
      foreignKey: 'id',
      otherKey: 'postId',
    });
  };

  return PostsCategory;
};