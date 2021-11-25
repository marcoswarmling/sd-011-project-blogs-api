const User = (sequelize, DataTypes) => {
  const newUser = sequelize.define('Categorie', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
    underscored: false,
  });

  return newUser;
};

module.exports = User;