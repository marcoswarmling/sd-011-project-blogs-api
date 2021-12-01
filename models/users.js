const Users = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, 
  {
    timestamps: false,
  });
  return User;
};
module.exports = Users;

// sem o timestamps a model não valida o email (already registered) ou a criação do usuário (201)