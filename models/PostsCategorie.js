const PostsCategorie = (sequelize, DataTypes) => {
  const PostsCategorie = sequelize.define('PostsCategorie',
  {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  PostsCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      through: PostsCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });

    models.Categorie.belongsToMany(models.BlogPost, {
      through: PostsCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blogPosts',
    });
  };

  return PostsCategorie;
};

module.exports = PostsCategorie;
