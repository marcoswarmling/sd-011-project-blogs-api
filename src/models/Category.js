module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {

    // database fields:
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,

  }, // options:
  { tableName: 'Categories', timestamps: false });

  return Category;
};
