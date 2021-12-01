const BlogPosts = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.STRING,
    updated: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'BlogPosts',
  });

  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return blogPosts;
};

module.exports = BlogPosts;