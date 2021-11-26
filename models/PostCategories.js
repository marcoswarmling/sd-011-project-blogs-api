  module.exports = (sequelize, _DataTypes) => {
    const PostCategories = sequelize.define('PostCategories', {}, { timestamps: false });

    PostCategories.associate = (models) => {
      models.BlogPosts.belongsToMany(models.Categories, {
        as: 'posts', through: PostCategories, foreignKey: 'postId', otherKey: 'categoryId',
      });
      models.Categories.belongsToMany(models.BlogPosts, {
        through: PostCategories,
        as: 'categories',
        foreignKey: 'categoryId',
        otherKey: 'postId',
      });
    };
    return PostCategories;
  };