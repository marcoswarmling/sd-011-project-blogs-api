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
    PostsCategorie.belongsToMany(models.Categorie, {
      through: PostsCategorie,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'categories',
    });

    PostsCategorie.belongsToMany(models.BlogPost, {
      through: PostsCategorie,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'blogPosts',
    });
  };

  return PostsCategorie;
};

module.exports = PostsCategorie;
