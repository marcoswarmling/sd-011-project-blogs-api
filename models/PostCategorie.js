module.exports = (sequelize, _DataTypes) => {
  const PostCategorie = sequelize.define('PostCategorie',
    {}, { timestamps: false, undersored: true });

  PostCategorie.associate = (models) => {
    models.BlogPost.belongsToMany(models.Categorie, {
      as: 'categories',
      through: PostCategorie,
      foreignKey: 'post_id',
      otherKey: 'category_id',
    });
    models.Categorie.belongsToMany(models.BlogPost, {
      as: 'blogposts',
      through: PostCategorie,
      foreignKey: 'category_id',
      otherKey: 'post_id',
    });
  };

  return PostCategorie;
};
