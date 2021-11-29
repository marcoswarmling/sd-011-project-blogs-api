function getAssociate(PostCategoryModel) {
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
  {},
  {
    timestamps: false,
    tableName: 'PostsCategories',
  });

  PostCategory.associate = getAssociate(PostCategory);

  return PostCategory;
};
