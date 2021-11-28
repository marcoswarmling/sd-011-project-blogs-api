module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    { timestamps: false });
  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
    BlogPost.belongsToMany(models.Category, {
      through: 'PostCategory',
      foreignKey: 'postId',
      as: 'categories',
    });
  };
  return BlogPost;
};
