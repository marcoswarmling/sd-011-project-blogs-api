module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, defaultValue: 1 },
  }, {
    tableName: 'Users',
    timestamps: false,
  });
  console.log('rodou modelo ==> ', sequelize.models);
  return User;
};
