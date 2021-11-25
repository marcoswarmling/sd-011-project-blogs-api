const Users = (sequelize, DataTypes) => {
  const sequelizeUser = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  return sequelizeUser;
};

module.exports = Users;