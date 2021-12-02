const Users = (sequelize, DataTypes) => {
  const user = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
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