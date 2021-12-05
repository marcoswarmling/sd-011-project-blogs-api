module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost',
  { title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE },
    { timestamps: true, tableName: 'BlogPosts', updatedAt: 'updated', createdAt: 'published' });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
      through: { attributes: [] },
    });
  };

  return BlogPost;
};
