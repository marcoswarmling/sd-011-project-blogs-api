// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories',
    {},
    { timestamps: false });
    PostsCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blogPosts',
      through: PostsCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostsCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };
  return PostsCategories;
};
