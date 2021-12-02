module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes, foreignKey: true },
  },
  { tableName: 'BlogPosts',
    timestamps: false });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.userId, {
      foreignKey: 'userId',
      as: 'userId' });

    BlogPost.belongsToMany(models.PostCategory, {
      foreignKey: 'postId',
      as: 'categories' });
  };

  return BlogPost;
};