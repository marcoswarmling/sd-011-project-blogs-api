const Category = (sequelize, DataTypes) => {
  const Cat = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
      name: DataTypes.STRING,
  }, 
  {
    timestamps: false,
    tableName: 'Categories',
  });
  
  return Cat;
};

module.exports = Category;
