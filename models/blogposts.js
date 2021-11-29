module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: { type: DataTypes.DATE, defaultValue: new Date() },
    updated: { type: DataTypes.DATE, defaultValue: new Date() },
  },
  {
    tableName: 'BlogPosts',
    timestamps: false,
  });
  BlogPosts.associate = (models) => {
    BlogPosts.belongsToMany(models.Users, { foreignKey: 'userId', as: 'User' });
  };

  return BlogPosts;
};