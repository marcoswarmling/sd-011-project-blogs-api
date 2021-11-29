module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, { timestamps: true, updatedAt: 'updated', createdAt: 'published' });
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, {
      foreignKey: 'userId',
    });
    BlogPosts.hasMany(models.PostsCategories, {
      foreignKey: 'postId',
    });
  };
  return BlogPosts;
};
