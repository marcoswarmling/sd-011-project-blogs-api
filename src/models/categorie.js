const Categorie = (sequelize, DataTypes) => {
  const sequelizeCategorie = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return sequelizeCategorie;
};

module.exports = Categorie;