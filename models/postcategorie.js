const PostCategorie = (sequelize, DataTypes) => {
  const PostCategorie1 = sequelize.define('PostCategorie', {
    postId: DataTypes.INTEGER,
  });
  PostCategorie1.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'blogposts',
      through: PostCategorie1,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: PostCategorie1,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return PostCategorie1;
};

module.exports = PostCategorie;