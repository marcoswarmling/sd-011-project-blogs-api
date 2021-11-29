const Post = (sequelize, _DataTypes) => {
    const post = sequelize.define('PostCategory', {},
    { timestamps: false, tableName: 'PostsCategories' });
     post.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: post,
            foreignKey: 'postId',
            otherKey: 'categoryId' }); 

        models.Category.belongsToMany(models.BlogPost, {
            as: 'blogPosts',
            through: post,
            foreignKey: 'categoryId',
            otherKey: 'postId',
        }); 
    };
    return post;
};

module.exports = Post;