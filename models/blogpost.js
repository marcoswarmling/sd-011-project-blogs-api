module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    blogPostId: { 
      type: DataTypes.INTEGER,
      field: 'blog_post_id',
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      allowNull: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
    underscored: true,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: {
        name: 'user_id',
      },
    });
  };

  return BlogPost;
};