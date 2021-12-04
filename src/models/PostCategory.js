function getAssociate(PostCategoryModel) {
  return (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryModel,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategoryModel,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };
}

module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
  {},
  {
    timestamps: false,
    tableName: 'PostsCategories',
  });

  PostCategory.associate = getAssociate(PostCategory);

  return PostCategory;
};
