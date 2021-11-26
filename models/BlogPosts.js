module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.hasOne(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return BlogPosts;
};
