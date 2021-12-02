module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {}, {
    tableName: 'PostsCategories',
    timestamps: false,
  });
// Associação ao model de Post
PostCategory.associate = ({ BlogPost, Category }) => {
  // A publicação pertence a um BlogPost
  // refencia na chave estrangeira, apresentada com nome (as)
  BlogPost.belongsToMany(Category, {
    as: 'categories',
    through: PostCategory,
    foreignKey: 'id',
    otherKey: 'categoryId',
  });
  Category.belongsTo(BlogPost, {
    as: 'BlogPost',
    through: PostCategory,
    foreignKey: 'id',
    otherKey: 'postId' });
};
  return PostCategory;
};
