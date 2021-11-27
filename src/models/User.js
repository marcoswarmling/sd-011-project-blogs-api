const User = (sequelize, DataTypes) => {
  const UserS = sequelize.define('User', {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'Users',
    });
  UserS.associate = (models) => {
    UserS.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'userPosts',
    });
  };
  return UserS;
};

module.exports = User;
