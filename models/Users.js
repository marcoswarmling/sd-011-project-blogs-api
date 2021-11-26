const Users = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  { timestamps: false });
 // console.log(users, 'USERS');

  return users;
};

module.exports = Users;