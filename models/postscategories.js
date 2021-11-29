const PostCategories = (sequelize, _DataTypes) => {
  const postCategory = sequelize.define('PostCategories', {},
    {
      timestamps: false,
    });

  /* postCategory.associate = (models) => {
    models.BlogPosts.belongsToMany(models.BlogPosts,
      { as: 'BlogPosts', through: postCategory, foreignKey: 'postId', otherKey: 'categoryId' });
    models.Categories.belongsToMany(models.Categories,
      { as: 'Categories', through: 'postCategory', foreignKey: 'categoryId', otherKey: 'postId' });
  }; */

  return postCategory;
};

module.exports = PostCategories;