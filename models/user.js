const User = (sequelize, DataTypes) => {
  const newUser = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
    underscored: false,
  });

  return newUser;
};

module.exports = User;