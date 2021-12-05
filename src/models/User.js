module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
  });
<<<<<<< HEAD
=======

  User.associate = (models) => {
    User.hasMany(
      models.BlogPosts,
      { foreignKey: 'userId', as: 'blogoposts' },
    );
  };

>>>>>>> 71741190d5f2a6695c0cc8e682e7b2659f5f7ca9
  return User;
};