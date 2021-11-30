const Users = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users',
    {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    { timestamps: false },
  );
  User.associate = function (models) {
    User.hasMany(models.BlogPosts, {
      foreignKey: 'usedId',
    });
  };
  return User;
};

module.exports = Users;
