const BlogPost = (sequelize, DataTypes) => {
  const BlogPost1 = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: { type: DataTypes.DATE, defaultValue: new Date() },
    updated: { type: DataTypes.DATE, defaultValue: new Date() },
  }, { timestamps: false });

  BlogPost1.associate = (models) => {
    BlogPost1.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost1;
};

module.exports = BlogPost;