module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    createdAt: 'published',
    updatedAt: 'updated',
  }, { timestamps: true, tableName: 'BlogPosts' });

  // BlogPost.associate = (models) => {
  //   BlogPost.belongsTo(models.User,
  //     { foreignKey: 'id', as: 'userId' });
  // };

  return BlogPost;
};
