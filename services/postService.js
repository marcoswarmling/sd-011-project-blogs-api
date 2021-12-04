const { BlogPost, User, PostsCategories } = require('../models');
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

  const result = await findUserByEmail(email);
  console.log('A testando o blogpost ----> ', result);
  const response = await BlogPost.create({ title, content, userId: result.dataValues.id });
  console.log('A resposta da gravação é ----> ', response);

  return { id: response.dataValues.id, userId: result.dataValues.id, title, content };
};

async function findcategoriesRelatedPost(id) {
 const categoriesRelated = await Promise.all(PostsCategories.findAll({ where: { id } }));

 return categoriesRelated;
}

const getAllPost = async () => {
  const allPost = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }],
  });
  console.log(' ---------------------allPost ', allPost);

  const allCategoriesRelated = await Promise.all(allPost.map(async ([{dataValues}]) => {
    console.log(' ---------------------post111111111111111111111111111111111111111111 ', dataValues);

    const categories = await findcategoriesRelatedPost(post.dataValies.id);
    console.log(' ---------------------categories ', categories);

    return categories;
  }));

  console.log(' ---------------------allPostWithCategories ', allPostWithCategories);

  return allCategoriesRelated;
};

module.exports = {
  postCreate,
  getAllPost,
};

//  Com o postcategories devolver uma lista de categorias relacionada ao post. Acher todos os id de postes iguais
//  Fazer um map e tranformar cada um em resultado da categoria procurada 

//  User o postCategories model
//  Com ele achar todas as linhas filtrando pelo id do post
//  Transformar com map essas linhas em um arrei de categorias
//  Regornar e categories esse array 
// {
//   "postId": 50,
//   "categoryId": 20
// }
//  O retorno de categorias vai ser :
// "categories": [
//   {
//     "id": 1,
//     "name": "Inovação"
//   }
// ]