module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {});

  PostsCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Category, {
      as: 'post',
      through: PostsCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
    models.Category.belongsToMany(models.BlogPosts, {
      as: 'category',
      through: PostsCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  };

  return PostsCategory;
};
