const BlogPosts = (sequelize, DataTypes) => {
  const blogposts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'user' });
  };

  return blogposts;
};

module.exports = BlogPosts;