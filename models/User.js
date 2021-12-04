const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    table: 'Users',
  });

  user.associate = (models) => {
    user.hasMany(models.BlogPost, { foreignKey: 'id', as: 'blogPosts' });
  };

  return user;
};

module.exports = User;
