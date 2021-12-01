const User = (sequelize, DataTypes) => sequelize.define('User',
  {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  },
  {
    timestamps: false, // createdAt e updatedAt
  });

module.exports = User;