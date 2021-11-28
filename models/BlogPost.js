const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'BlogPosts',
  });

  BlogPost.associate = (models) => {
    BlogPost.hasOne(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  };

  return BlogPost;
};

module.exports = BlogPostModel;