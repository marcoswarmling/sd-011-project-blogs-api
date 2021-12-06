module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'user_id', as: 'posts' });
  };

  return User;
};
