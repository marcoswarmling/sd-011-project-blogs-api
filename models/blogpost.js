const BlogPost = (sequelize, DataTypes) => {
  const BlogPost1 = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  });

  BlogPost1.associate = (models) => {
    BlogPost1.belongsTo(models.User,
      { foreignKey: 'userId', as: 'users' });
  };

  return BlogPost1;
};

module.exports = BlogPost;