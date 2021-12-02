module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    tittle: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    createdAt: 'published',
    updatedAt: 'updated',
  });
  Post.associate = (models) => {
    Post.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
  };
  return Post;
};