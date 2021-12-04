const { BlogPost } = require('../models');
const { getCategory } = require('./categoriesService');
const { findUserByEmail } = require('./userService');

const categoryNotFound = new Error('categoryNotFound');

async function checkAllCategoriesValid(categoryIds) {
  const categoriesFound = await Promise.all(categoryIds.map(async (id) => getCategory(id)));

  if (categoriesFound.some((category) => category === null)) {
    throw categoryNotFound;
  }

  return true;
}

const postCreate = async ({ title, content, categoryIds }, email) => {
  const isAllCategoriesValid = await checkAllCategoriesValid(categoryIds);
  if (!isAllCategoriesValid) { // corrigir essa logica
    return categoryNotFound;
  }

  const { id } = await findUserByEmail(email);
  const response = await BlogPost.create({ userId: id, title, content });
  console.log('A resposta da gravação é ----> ', response);

  return { id, title, content };
};
//  Tem que salvar em blogpost title, content, categoryIds, iserId
// tem que devolver de resposta  title, content iserId e id
//  Tem que salvar em postCategories o post e as suas devidas categorias
// async function createAssociateBetweenPostAndCategories(postId, )

module.exports = {
  postCreate,
};
