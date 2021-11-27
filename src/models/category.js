const Category = (sequelize, DataTypes) => {
  const sequelizeCategory = sequelize.define('Category', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return sequelizeCategory;
};

module.exports = Category;