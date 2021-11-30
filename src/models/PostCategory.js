module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostsCategory', {}, {
    postId: { type: DataTypes.INTEGER, foreignkey: true },
    category: { type: DataTypes.INTEGER, foreignkey: true },
  }, {
    timestamps: false,
  });
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory, as: 'categories', foreignKey: 'postId', otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory, as: 'posts', foreignKey: 'categoryId', otherKey: 'postId',
    });
  };
  return PostCategory;
};