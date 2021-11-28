module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, field: 'published' },
    updatedAt: { type: DataTypes.DATE, field: 'Updated' },
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return BlogPosts;
};
