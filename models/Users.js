const User = (sequelize, DataTypes) => {
  const NewUser = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  return NewUser;
};

module.exports = User;
