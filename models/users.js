const Users = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, 
  {
    timestamps: false,
  });
  User.associate = (models) => {
    User.hasMany(models.BlogPosts, {
      as: 'user',
      foreignKey: 'userId',
    });
  };

  return User;
};
module.exports = Users;

// sem o timestamps a model não valida o email (already registered) ou a criação do usuário (201)