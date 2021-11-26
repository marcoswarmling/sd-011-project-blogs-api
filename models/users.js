const Users = (Sequelize, DataTypes) => {
  const User = Sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  return User;
};

module.exports = Users;