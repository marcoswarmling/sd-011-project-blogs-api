module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.STRING,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
 });

  return User;
};