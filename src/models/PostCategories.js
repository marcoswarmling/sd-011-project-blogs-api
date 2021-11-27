module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories',
    {},
    { timestamps: false });

    // PostsCategories.associate = (models) => {
      // console.log(' aqui esta o model linha 8-->', models )
    //   // console.log(' aqui é a models -->', models)
    // models.BlogPosts.belongsToMany(models.Categories, {
    //   as: 'categories',
    //   through: PostsCategories,
    //   foreignKey: 'categories_id',
    //   otherKey: 'blogPosts_id',
    // });
    // models.Categories.belongsToMany(models.BlogPosts, {
    //   as: 'blogPosts', through: PostsCategories, foreignKey: 'blogPosts_id',
    //   otherKey: 'categories_id',
    // });
  // };

  return PostsCategories;
};
  // module.exports = (sequelize, _DataTypes) => {
  //   const PostCategories = sequelize.define('PostCategories', {}, { timestamps: false });

  //   PostCategories.associate = (models) => {
  //     models.BlogPosts.belongsToMany(models.Categories, {
  //       as: 'posts', through: PostCategories, foreignKey: 'postId', otherKey: 'categoryId',
  //     });
  //     models.Categories.belongsToMany(models.BlogPosts, {
  //       through: PostCategories,
  //       as: 'categories',
  //       foreignKey: 'categoryId',
  //       otherKey: 'postId',
  //     });
  //   };
  //   return PostCategories;
  // };