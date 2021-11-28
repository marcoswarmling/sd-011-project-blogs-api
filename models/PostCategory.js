const PostCategoryModel = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
    {},
    { timestamps: false, underscore: true, tableName: 'PostsCategories' });
    PostCategory.associate = (models) => {
      models.BlogPost.belongsToMany(models.Category, {
        as: 'categories',
        through: PostCategory,
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
      models.Category.belongsToMany(models.BlogPost, {
        as: 'blogPosts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
    return PostCategory;
};

module.exports = PostCategoryModel;
