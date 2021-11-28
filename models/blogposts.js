const BlogPost = (sequelize, DataTypes) => {
  const newBlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
    tableName: 'BlogPosts',
  });
  newBlogPost.associate = (models) => {
    newBlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return newBlogPost;
};

module.exports = BlogPost;
