module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, { timestamps: false });
  PostsCategory.associate = (models) => {
    models.User.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  };
  PostsCategory.associate = (models) => {
    models.Category.belongsToMany(models.User, {
      as: 'users',
      through: PostsCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
  };
  return PostsCategory;
};
