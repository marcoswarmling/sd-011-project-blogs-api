const BlogPosts = (sequelize, DataTypes) => sequelize.define('BlogPost',
  {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  },
  {
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });

module.exports = BlogPosts;