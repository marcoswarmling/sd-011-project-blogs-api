const blogPost = (sequelize, DataTypes) => {
  const Post = sequelize.define('BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, notNull: true, autoIncrement: true },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
    },
    {
      timestamps: true,
      modelName: 'BlogPost',
      createdAt: 'published',
      updatedAt: 'updated',
    });
  Post.associate = (models) => {
    Post.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
  };
  return Post;
};

module.exports = blogPost;
