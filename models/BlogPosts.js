module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: false });
  BlogPosts.associate = (models) => {
    BlogPosts.belongsToMany(models.Categories, {
      foreignKey: 'postId',
      as: 'categories',
      through: models.PostsCategories,
    });
    BlogPosts.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return BlogPosts;
};
