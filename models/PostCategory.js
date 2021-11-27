module.exports = (sequelize, _DataTypes) => {
  const PostCategories = sequelize.define('PostCategories',
  {},
  { timestamps: false, underscored: true, tableName: 'PostsCategories' });

  PostCategories.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategories,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };

  return PostCategories;
};
