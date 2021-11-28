module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Categories', {
    name: { type: DataTypes.STRING, allowNull: false },
  }, {
    tableName: 'Categories',
    timestamps: false,
  });
  return Category;
};