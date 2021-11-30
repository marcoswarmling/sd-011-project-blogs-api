const Categories = (sequelize, DataTypes) => {
  const Categorie = sequelize.define(
    'Categories',
    {
      name: DataTypes.STRING,
    },
    { timestamps: false },
  );
  Categorie.associate = (models) => {
    Categorie.hasMany(models.PostsCategories, {
      as: 'PostsCategory',
      foreignKey: 'categoryId',
    });
  };
  return Categorie;
};

module.exports = Categories;
