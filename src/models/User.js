module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    // database fields:
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,

  }, // options:
  { tableName: 'Users', timestamps: false });

  return User;
};
