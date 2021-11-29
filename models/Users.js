const Users = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });
  Users.associate = (models) => {
    users.hasMany(models.BlogPosts, {
      as: 'users',
      foreignKey: 'userId',
    });
  };
  return users;
};

module.exports = Users;