module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    tableName: 'Users',
    timestamps: false,
  });

  User.associate = ({ BlogPost }) => {
    User.hasMany(BlogPost, { foreignKey: 'userId', as: 'blogPosts' });
  };

  return User;
};
