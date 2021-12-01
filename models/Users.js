module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    displayName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    image: DataTypes.STRING,    
  }, {
    timestamps: false,
  });

  return Users;
};