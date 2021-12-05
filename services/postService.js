const { BlogPost, User, Categories } = require('../models');
const { getCategory } = require('./categoriesService');
const { findUserByEmail } = require('./userService');

const categoryNotFound = new Error('categoryNotFound');

async function checkAllCategoriesValid(categoryIds) {
  const categoriesFound = await Promise.al(categoryIds.map(async (id) => getCategory(id)));

  if (categoriesFound.some((category) => category === null)) {
    throw categoryNotFound;
  }

  return true;
}

const postCreate = async ({ title, content, categoryIds }, email) => {
  const isAllCategoriesValid = await checkAllCategoriesValid(categoryIds);
  if (!isAllCategoriesValid) {
    // corrigir essa logica
    return categoryNotFound;
  }

  const result = await findUserByEmail(email);
  const response = await BlogPost.create(
    { title, content, userId: result.dataValues.id },
  );

  return {
    id: response.dataValues.id,
    userId: result.dataValues.id,
    title,
    content,
  };
};

// async function findCategoriesRelatedPost(id) {
//   const allPostsCategories = await PostsCategories.findAll();

//   const postsCategoriesFiltered = allPostsCategories
//     .filter((postCategory) => postCategory.postId === id)
//     .map((postCategoryFiltered) => postCategoryFiltered.categoryId);

//   const categories = await Promise.all(
//     postsCategoriesFiltered.map(async (categoryId) => getCategory(categoryId)),
//   );

//     console.log(' <---------------- categories ---------->', categories);

//   return categories;
// }
//  Tem que devolver um array de objtos categorias que estão relacionadas com o post para usarmos para montar o psot 
// async function findCategoriesRelatedToPostId(id) {
//   //  Retorna todas as relações
//     const allPostsCategories = await PostsCategories.findAll();
//     console.log('<-------- allPostsCategories ------>', allPostsCategories);

//     //  Filtra todas as relações e tranforma em um array de obj categorias.
//   const postsCategoriesFiltered = await allPostsCategories
//   //  Filtra todas as informações com relação ao id post
//     .filter((postCategory) => postCategory.postId === id)
//     // Transforma em um arry de ids de categorias
//     .map((postCategoryFiltered) => postCategoryFiltered.categoryId)
//     //  Tranforma o array de ids em arrai de obj categoria
//     .map((categoryId) => getCategory(categoryId));

//     console.log('<----------------postsCategoriesFiltered ------------> ', postsCategoriesFiltered);

//     return Promise.all(postsCategoriesFiltered);
// }

//  Essa função tem que devolver um array de post com seus objs de categoria 
// async function mergePostWithCategories(post, id) {
//   //  Função que acha em PostsCategories todos os ids das categorias relacionadas ao post

//   //  Tem que devolver um array de objtos categorias que estão relacionadas com o post para usarmos para montar o psot 
//   const categoriesRelatedToPostId = await findCategoriesRelatedToPostId(id); 
  
//   // TRanforma o post em um obj com a categoria
//   const postWithCategories = { ...post, categories: categoriesRelatedToPostId };

//   console.log('<---------------postWithCategories--------> ', postWithCategories);

//   return postWithCategories;
// }

// const getAllPost = async () => {
//   const allPost = await BlogPost.findAll({
//     include: [
//       { model: User, as: 'user', attributes: { exclude: ['password'] } },
//     ],
//   });

//   //  Array com todos os posts com suas categorias
//   const allPostWithCategories = await allPost.map((post) => mergePostWithCategories(post, post.id));
//   console.log('<---------------allPostWithCategories--------> ', await Promise.all(allPostWithCategories));

//   const result = await Promise.all(allPostWithCategories)
//   // const allCategoriesRelated = await Promise
//   //   .all(allPost.map(async ({ dataValues }) => findCategoriesRelatedPost(dataValues.id)));

//   //  Falta retornar as infos do blogPost --> fazer um map com find pelo id com allPost e allCategoriesRelated relacionando pelo id
//   return result;
// };

const getAllPost = async () => {
  try {
    const response = await BlogPost.findAll({ 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Categories,
          as: 'categories',
          through: { attributes: [] }, // Porque disso?
          attributes: { exclude: ['PostsCategories'] },
        },
      ],
    });

    return response;
  } catch (e) {
    return { error: 'serverError' };
  }
};

module.exports = {
  postCreate,
  getAllPost,
};
