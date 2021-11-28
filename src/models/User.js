const User = (sequelize, DataTypes) => {
  // eslint-disable-next-line no-shadow
  const User = sequelize.define('User', {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users',
    });
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'userPosts',
    });
  };
  return User;
};

module.exports = User;
