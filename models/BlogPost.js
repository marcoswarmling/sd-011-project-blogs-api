module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('User', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    createdAt: 'published',
    updatedAt: 'updated',
  }, { timestamp: true, tableName: 'BlogPosts', underscored: true });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'id', otherKey: 'id', as: 'userId' });
  };

  return BlogPost;
};
