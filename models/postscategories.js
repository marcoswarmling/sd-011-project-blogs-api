const PostsCategories = (sequelize, _DataTypes) => {
  const postsCategories = sequelize.define(
  'PostsCategories',
  {},
  { timestamps: false },
);
  PostsCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blogposts',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
  return postsCategories;
};

module.exports = PostsCategories;
