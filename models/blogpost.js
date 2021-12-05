const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
  },
    {
      tableName: 'BlogPosts',
      timestamps: false,
    });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { foreignkey: 'userId', as: 'user' });
  };

  return blogPost;
};

module.exports = BlogPost;