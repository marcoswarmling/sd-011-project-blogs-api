const Categories = (sequelize, DataTypes) => {
  const Categorie = sequelize.define(
    'Categories',
    {
      name: DataTypes.STRING,
    },
    { timestamps: false },
  );
  Categorie.associate = function (models) {
    Categorie.hasMany(models.PostsCategories, {
      foreignKey: 'categoryId',
    });
  };
  return Categorie;
};

module.exports = Categories;
