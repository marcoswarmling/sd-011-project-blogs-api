const User = (sequelize, DataTypes) => {
  const newUser = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
    underscored: true,
  });

  return newUser;
};

module.exports = User;