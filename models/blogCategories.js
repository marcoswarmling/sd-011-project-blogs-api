module.exports = (sequelize, _DataTypes) => {
  const BlogCategories = sequelize.define('BlogCategories',
    {},
    { timestamps: false });

  BlogCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPost, {
      as: 'blogPosts',
      through: BlogCategories,
      foreignKey: 'category_id',
      otherKey: 'blog_post_id',
    });
    models.BlogPost.belongsToMany(models.Categories, {
      as: 'categories',
      through: BlogCategories,
      foreignKey: 'blog_post_id',
      otherKey: 'category_id',
    });
  };

  return BlogCategories;
};