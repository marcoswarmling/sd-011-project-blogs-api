const User = (sequelize, DataTypes) => {
  const newUser = sequelize.define('Categorie', {
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Categories',
  });

  return newUser;
};

module.exports = User;
