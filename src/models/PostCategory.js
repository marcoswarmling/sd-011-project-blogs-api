module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory',
    {}, { timestamps: false, tableName: 'PostsCategories' });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.BlogPost.belongsToMany(models.BlogPost, {
      as: 'blogsposts',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategory;
};