module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
     id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
     displayName: DataTypes.STRING,
     email: DataTypes.STRING,
     password: DataTypes.STRING,
     image: DataTypes.STRING,
   }, {
     timestamps: false,
     tableName: 'Users',
   });
 
   User.associate = (models) => {
     // dizendo ao sequelize que a PK id, vai ser ums FK na tabela blogPosts
     User.hasMany(
       models.BlogPost,
       { foreignKey: 'userId', as: 'BlogPosts' },
     );
   };
 
   return User;
 };