const User = (sequelize, DataTypes) => {
  const sequelizeUser = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  return sequelizeUser;
};

module.exports = User;