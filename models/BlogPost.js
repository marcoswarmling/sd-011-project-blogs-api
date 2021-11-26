module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.STRING,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  }, {
    tableName: 'BlogPosts',
  });

  BlogPost.associate = (models) => {
    BlogPost.hasMany(models.PostsCategory, {
      foreignKey: 'postId',
      as: 'BlogPosts',
    });
    // BlogPost.belongsTo(models.Users, {

    // });
  };

  return BlogPost;
};