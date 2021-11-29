const User = (sequelize, DataTypes) => {
  const UserX = sequelize.define('User', { id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    { timestamps: false, tableName: 'Users' });
    UserX.associate = (models) => {
    UserX.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'userPosts',
    });
  };
  return UserX;
};

module.exports = User;
