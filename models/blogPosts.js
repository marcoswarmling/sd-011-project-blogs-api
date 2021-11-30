const BlogPosts = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return blogPosts;
};

module.exports = BlogPosts;