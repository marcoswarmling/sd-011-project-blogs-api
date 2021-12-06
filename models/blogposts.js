const BlogPosts = (sequelize, DataTypes) => {
  const blogPost = sequelize.define(
    'BlogPosts', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    { 
      timestamps: false,
    },
  );

  return blogPost;
};

module.exports = BlogPosts;