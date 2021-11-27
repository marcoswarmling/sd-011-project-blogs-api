const BlogPosts = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
  }, { timestamps: false });
  blogPost.associate = (models) => {
    blogPost.belongsTo(models.Users, {
      foreingKey: 'userId',
      as: 'user',
    });
  };
  return blogPost;
};

module.exports = BlogPosts;
