const BlogPost = (sequelize, DataTypes) => {
  const NewBlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  });

  return NewBlogPost;
};

module.exports = BlogPost;
