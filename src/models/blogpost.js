const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: { type: DataTypes.STRING },
    content: { type: DataTypes.STRING },
    userId: { type: DataTypes.INTEGER },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
    createdAt: 'published',
    updatedAt: 'updated',
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
  };

  return blogPost;
};

module.exports = BlogPost;