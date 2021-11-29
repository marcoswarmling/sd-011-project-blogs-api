const User = (sequelize, DataTypes) => {
  const userTable = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  userTable.associate = (models) => {
    userTable.hasMany(models.BlogPost, { foreignKey: 'userId', as: 'user' });
  };
  return userTable;
};

module.exports = User;