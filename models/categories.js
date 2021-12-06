module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      field: 'id',
    },
    name: DataTypes.STRING,
  });

  return Categories;
};