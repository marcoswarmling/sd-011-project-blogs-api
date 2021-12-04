const PostCategorie = (sequelize, _DataTypes) => {
  const PostCategorieModel = sequelize.define('PostsCategorie',
  {},
    { tableName: 'PostsCategories', timestamp: false });

  PostCategorieModel.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostCategorieModel,
      foreignKey: 'postId',
      otherKey: 'CategoryId',
    });

    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategorieModel,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostCategorieModel;
};

module.exports = PostCategorie;
