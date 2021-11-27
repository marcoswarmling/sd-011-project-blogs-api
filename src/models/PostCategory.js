module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostsCategory', {}, {
    postId: { type: DataTypes.INTEGER, foreignkey: true },
    category: { type: DataTypes.INTEGER, foreignkey: true },
  }, {
    timestamps: false,
  });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory, as: 'Categories', foreignKey: 'postId', otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory, as: 'Posts', foreignKey: 'categoryId', otherKey: 'postId',
    });
  };
  return PostCategory;
};