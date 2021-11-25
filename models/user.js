const User = (sequelize, DataTypes) => {
  const User1 = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, 
  { timestamps: false });

  User1.associate = (models) => {
    User1.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'blogposts' });
  };

  return User1;
};

module.exports = User;