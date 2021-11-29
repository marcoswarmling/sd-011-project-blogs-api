const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, { timestamps: false });

  return user;
};

User.associate = (models) => {
  User.hasMany(models.BlogPost,
    { foreignKey: 'userId', as: 'blogPosts' });
};

module.exports = User;