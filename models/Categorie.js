const Categorie = (sequelize, DataTypes) => (
  sequelize.define('Categorie', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    tableName: 'Categories',
    underscored: true,
    timestamps: false,
  })
);

module.exports = Categorie;
