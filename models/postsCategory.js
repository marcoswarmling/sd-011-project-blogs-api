const PostsCategory = (sequelize, _DataTypes) => {
  const postsCategory = sequelize.define('PostsCategory', {},
    { timestamps: false });
  postsCategory.associate = (models) => {
    postsCategory.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    }),
    postsCategory.belongsTo(models.Category, {
      foreignKey: 'categoryId',
      as: 'category',
    });
  };
  return PostsCategory;
};

module.exports = PostsCategory;