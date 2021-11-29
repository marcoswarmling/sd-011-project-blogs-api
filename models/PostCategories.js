module.exports = (sequelize, _DataTypes) => {
    const PostCategory = sequelize.define('PostCategory',
    {},
    {
      tableName: 'PostsCategories',
      timestamps: false,
    });

    PostCategory.associate = (models) => {
      models.BlogPosts.belongsToMany(
        models.Categories,
        { as: 'categories', foreignKey: 'postId', otherKey: 'categoryId', through: PostCategory },
      );
        models.Categories.belongsToMany(
        models.BlogPosts,
        { as: 'blogPosts', foreignKey: 'categoryId', otherKey: 'postId', through: PostCategory },
      );
    };

    return PostCategory;
  };