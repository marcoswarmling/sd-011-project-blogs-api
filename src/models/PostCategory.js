function getAssociate(PostCategoryModel) {
  // associations
  return (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'posts',
      through: PostCategoryModel,
      foreignKey: 'postId',
      otherKey: 'id',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: PostCategoryModel,
      foreignKey: 'categoryId',
      otherKey: 'id',
    });
  };
}

module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('UserBook',
  {}, // options:
  { timestamps: false, tableName: 'PostsCategories' });

  // association:
  PostCategory.associate = getAssociate(PostCategory);

  return PostCategory;
};
