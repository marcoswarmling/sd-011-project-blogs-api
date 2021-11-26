const Users = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamps: false,
  });

  users.associate = (models) => {
    users.hasMany(models.BlogPosts, { foreignKey: 'userId', as: 'BlogPosts' });
  };

  return users;
};

module.exports = Users;