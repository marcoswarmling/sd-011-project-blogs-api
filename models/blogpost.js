const BlogPost = (sequelize, DataTypes) => {
  const createBlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamps: false,
  });

  createBlogPost.associate = (models) => {
    createBlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
  };
  
  return createBlogPost;
};

module.exports = BlogPost;