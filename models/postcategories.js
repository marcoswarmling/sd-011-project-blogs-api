const PostCategories = (sequelize, _DataTypes) => {
  const newPostCategorie = sequelize.define('PostsCategorie',
  {},
  { tableName: 'PostsCategories', timestamps: false });

  newPostCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: newPostCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: newPostCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return newPostCategorie;
};

module.exports = PostCategories;