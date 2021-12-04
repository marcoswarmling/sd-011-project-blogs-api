module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  });
  return users;
};

// https://sequelize.org/master/manual/model-basics.html
// https://sequelize.org/master/manual/validations-and-constraints.html
