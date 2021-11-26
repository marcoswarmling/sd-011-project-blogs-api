module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    createdAt: { type: DataTypes.DATE, field: 'published' },
    updatedAt: { type: DataTypes.DATE, field: 'updated' },
  }, { timestamps: true });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user',
    }); 
};

  return BlogPost;
};