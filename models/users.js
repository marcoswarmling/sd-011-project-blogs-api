const Users = (Sequelize, DataTypes) => {
  const User = Sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, 
  {
    timestamps: false,
    tableName: 'Users',
  });

  return User;
};

module.exports = Users;