module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Category', {
    name: DataTypes.STRING,
  }, { timestamps: false, tableName: 'Categories', underscored: true });

  return User;
};
