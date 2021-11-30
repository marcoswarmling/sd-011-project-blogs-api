const User = (sequelize, DataTypes) => {
  const UserType = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  return UserType;
  };

module.exports = User;