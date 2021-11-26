const getId = (DataTypes) => ({
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true,
});

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: getId(DataTypes),
    name: DataTypes.STRING,
  },
  {
    tableName: 'Categories',
    timestamps: false,
  });

  return Category;
};
