module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    tableName: 'Categories',
    timestamps: false,
  });

// PRECISO ASSOCIAR COM A TABELA BLOG POST SE TEM MINHA TABELA DE RELACIONAMENTO?
// SER OU NÃO SER EIS A QUESTÃO🤔
  // Category.associate = (models) => {
  //   Category.belongsTo(models.BlogPost, {
  //     foreignKey: 'userId',
  //     as: 'userId',
  //   });
  // };

  return Category;
};