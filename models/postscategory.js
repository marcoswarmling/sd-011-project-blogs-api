module.exports = (sequelize, DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    timestamps: false,
  });

  PostsCategory.associate = (models) => {
    // Essa parte para ter um melhor entendimento ver na aula ao vivo do dia 29.3
    models.BlogPost.belongsToMany(models.Category, {
      through: PostsCategory, as: 'categories', foreignKey: 'postId', otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: PostsCategory, as: 'posts', foreignKey: 'categoryId', otherKey: 'postId',
    });
  };

  return PostsCategory;
};