module.exports = (sequelize, DataTypes) => {
    const blogPost = sequelize.define('BlogPosts', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.STRING,
      published: DataTypes.DATA,
      updated: DataTypes.DATA,
    },
    { timestamps: false });
    
    // belongsTo - pertenca a
    // Ou seja esta referindo que meu userId da tabela BlogPosts pertence ao compo id tabela Users com alias de user.
    blogPost.associate = (models) => {
      blogPost.belongsTo(models.Users,
        { foreignKey: 'userId', as: 'user' });
    };
    return blogPost; 
  };