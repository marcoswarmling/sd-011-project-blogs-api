const BlogPost = (sequelize, DataTypes) => {
    const BlogModel = sequelize.define('BlogPost', {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: { type: DataTypes.INTEGER, foreignKey: true },
    },
        {
            timestamps: true,
            createdAt: 'published',
            updatedAt: 'updated',
        });

        BlogModel.associate = (models) => {
            BlogModel.belongsTo(models.User, { 
              foreignKey: 'userId', as: 'user',
            });
        };

        return BlogModel;
};

module.exports = BlogPost;