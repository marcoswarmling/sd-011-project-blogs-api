const BlogPosts = (sequelize, DataTypes) => {
  const blogposts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, 
  { timestamps: false });
  blogposts.associate = (models) => {
    blogposts.belongsTo(models.Users, { as: 'user', foreignKey: 'userId' });
  };
  return blogposts;
};

module.exports = BlogPosts;