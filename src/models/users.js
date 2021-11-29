const Users = (sequelize, DataTypes) => {
  const sequelizeUser = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });

  sequelizeUser.associate = (models) => {
    sequelizeUser.hasMany(models.BlogPosts,
      { foreignKey: 'userId', as: 'blogposts' });
  };

  return sequelizeUser;
};

module.exports = Users;