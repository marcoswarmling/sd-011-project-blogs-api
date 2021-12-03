module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes, foreignKey: true },
    categoryIds: { type: DataTypes, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  { tableName: 'BlogPosts', timestamps: false });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });

    // BlogPost.belongsToMany(models.Category, { foreignKey: 'categoryIds', through: BlogPost, as: 'category' });
  };

  return BlogPost;
};