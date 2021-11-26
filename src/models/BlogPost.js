const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
    createdAt: 'published',
    updatedAt: 'updated',
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'author' });
  };

  return blogPost;
};

module.exports = BlogPost;
