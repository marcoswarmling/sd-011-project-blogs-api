const BlogPosts = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'BlogPosts',
    timestamps: false,
  });

  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.Users, { foreignKey: 'userId', as: 'Users' });
  };

  return blogPosts;
};

module.exports = BlogPosts;