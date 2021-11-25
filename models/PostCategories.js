// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
  const PostCategories = sequelize.define('PostCategories',
    {},
    { timestamps: false });
  PostCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts, {
      as: 'blogPosts',
      through: PostCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.BlogPosts.belongsToMany(models.Categories, {
      as: 'categories',
      through: PostCategories,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };
  return PostCategories;
};
