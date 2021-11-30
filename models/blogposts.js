module.exports = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define('BlogPosts', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: false });
  //   timestamps: false remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.Users, { foreignKey: 'userId', as: 'user' });
    BlogPosts.belongsToMany(models.Categories, {
      foreignKey: 'postId',
      as: 'categories',
      through: models.PostsCategories,
    });
  };
  return BlogPosts;
};
