const User = (sequelize, DataTypes) => {
  const newCategorie = sequelize.define('Categories', {
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
    underscored: true,
  });

  return newCategorie;
};

module.exports = User;