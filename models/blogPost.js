module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', { 
    // id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    createdAt: 'published',
    updatedAt: 'updated', 
    // userId: { type: DataTypes.INTEGER, foreignKey: true },
  }); /* , {
    tableName: 'BlogPosts',
    timestamps: false,
  }); */
  // Associação ao model de User
  BlogPost.associate = ({ User }) => {
    BlogPost.belongsTo(User, { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};

/* Após o entendimento de que os erros estavam acontecendo pois não estavam sendo passados os dados corretamente,
o model foi refatorado, com base no trabalho de Iago dos Anjos, PR: https://github.com/tryber/sd-011-project-blogs-api/pull/132/files
dessa forma, o model só espera duas informações serem passadas, e pega automaticamente as infos disponibilizadas pelo migration */
