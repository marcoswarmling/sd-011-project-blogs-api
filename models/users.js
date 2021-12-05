module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('Users', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
    });
    // hasMany - tem muitos
    // a tabela tem muito blogposts referenciando pela foreing key userId
    user.associate = (models) => {
      user.hasMany(models.BlogPosts,
        { foreignKey: 'userId', as: 'posts' });
    };
    return user; 
  };