const User = (sequelize, DataTypes) => {
  const newUser = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  newUser.associate = (models) => {
    newUser.hasOne(models.Post,
      { foreignKey: 'userId', as: 'posts' });
  };

  return newUser;
};

module.exports = User;
