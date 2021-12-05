const { BlogPost, PostsCategories, Categories, User } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  const response = await BlogPost.create({
    title,
    content,
    categoryIds,
    userId,
  });

  categoryIds.forEach(async (id) => {
    await PostsCategories.create({ postId: response.id, categoryId: id });
  });
  return response;
};

const getAll = async () => {
  const posts = await BlogPost.findAll();
  const categories = await Categories.findAll();
  const postCat = await PostsCategories.findAll(); 

 /*  console.log('CONSOLE LOG DO categories', categories);
  console.log('CONSOLE LOG DO postCat', postCat); */
  const data = posts.map(async (post) => {
    const user = await User.findOne({ where: { id: post.userId } });
    /* console.log('CONSOLE LOG DO user', user); */

    const removePass = Object.entries(user.dataValues).filter( // vai fazer um filtro do array user.dataValues retornando tudo menos o password
      (el) => el[0] !== 'password',
      );
    /* console.log('CONSOLE LOG DO removePass', removePass); */
  
    const formatedUser = Object.fromEntries(removePass); // transforma de volta a lista do removePass em um objeto, agora sem o password
    /* console.log('CONSOLE LOG DO formatedUser', formatedUser); */

    const postcategories = categories.filter( // Filtrar o array categories pelo id
      ({ id }) => postCat.some(({ postId }) => id === postId), // retorna o categories.dataValues só com o id e o name
    );
    /* console.log('CONSOLE LOG DO postcategories', postcategories); */

    return { ...post.dataValues, user: formatedUser, categories: postcategories };
  });

  return data;
};

module.exports = { create, getAll };