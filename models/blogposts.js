const getId = (DataTypes) => ({
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
});

const getUserId = (DataTypes) => ({ type: DataTypes.INTEGER, foreignKey: true });

module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: getId(DataTypes),
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: getUserId(DataTypes),
  },
  {
    tableName: 'BlogPosts',
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'users' });
  };

  return BlogPosts;
};
