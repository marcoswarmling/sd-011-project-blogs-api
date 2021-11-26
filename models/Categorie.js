const Categorie = (sequelize, DataTypes) =>
  sequelize.define(
    'Categorie',
    {
      name: DataTypes.STRING,
    },
  );

module.exports = Categorie;
