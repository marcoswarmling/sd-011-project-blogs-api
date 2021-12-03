module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    id: DataTypes.NUMBER,
    email: DataTypes.STRING, // tem quer ser único
    password: DataTypes.NUMBER,
    image: DataTypes.STRING, 
  });

  return Users;
};
