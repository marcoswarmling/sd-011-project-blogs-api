const Users = (sequelize, DataTypes) => {
  const user = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  user.associate = (models) => {
    user.hasMany(models.BlogPosts, {
      foreingKey: 'userId',
      as: 'posts',
    });
  };
  return user;
};

module.exports = Users;
