module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, {
      tableName: 'PostsCategories', timestamps: false,
    });
    
    // NÃO PRECISO ASSOCIAR A TABELA DE RELACIONAMENTO USAR: through
  // PostCategory.associate = (models) => {
  //   models.BlogPost.belongsToMany(models.Category, {
  //     as: 'categories',
  //     through: PostCategory,
  //     foreignKey: 'postId',
  //     otherKey: 'categoryId',
  //   });

  //   models.Category.belongsToMany(models.BlogPost, {
  //     as: 'post',
  //     through: PostCategory,
  //     foreignKey: 'categoryId',
  //     otherKey: 'postId',
  // }); 
// };
    return PostCategory;
  };
