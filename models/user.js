const User = (sequelize, DataTypes) => {
  const newUser = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Users',
    underscored: false,
  });
  newUser.associate = (models) => {
    newUser.hasMany(models.BlogPost, { foreignKey: 'id', as: 'blogPosts' });
  };
  return newUser;
};

module.exports = User;