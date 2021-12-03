const BlogPosts = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return blogPosts;
};

module.exports = BlogPosts;