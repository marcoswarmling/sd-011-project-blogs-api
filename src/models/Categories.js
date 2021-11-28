// prettier-ignore
const Category = (sequelize, DataTypes) => {
  const CategoryS = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      
    },
    name: DataTypes.STRING,
  }, 
  {
    timestamps: false,
  });
  
  return CategoryS;
};

module.exports = Category;
