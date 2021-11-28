module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    createdAt: { type: DataTypes.DATE, name: 'createdAt', field: 'published' },
    updatedAt: { type: DataTypes.DATE, name: 'updatedAt', field: 'updated' },
  }, { tableName: 'BlogPosts' });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
    // BlogPost.hasMany(models.PostsCategory, { foreignKey: 'postId', as: 'BlogPosts' });
  };

  return BlogPost;
};