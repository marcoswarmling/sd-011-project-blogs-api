// prettier-ignore
const Category = (sequelize, DataTypes) => {
  const CategoryS = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  });
  
  return CategoryS;
};

module.exports = Category;
