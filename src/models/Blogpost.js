module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  BlogPost.associate = (models) => {
<<<<<<< HEAD
    BlogPost.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
=======
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
    BlogPost.hasMany(models.PostsCategory, { foreignKey: 'postId', as: 'PostsCategories' });
>>>>>>> 71741190d5f2a6695c0cc8e682e7b2659f5f7ca9
  };
  return BlogPost;
};