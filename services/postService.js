const { BlogPosts, Categories } = require('../models');
// require("dotenv").config();

const postCreate = async (bodyRequest, dataToken) => {

//  Conferir se todas as categorias existem
//  Pegar o id do usuario

  // const post = await BlogPosts.create(title, content, categoryIds);

  return post;
};

// const getAllcategories = async () => Categories.findAll();

// // const findOne = async (email, password) => {
// //   const 'Categories = await 'Categories.findOne({ where: { email, password } });

// //   if (!'Categories) {
// //     throw new Error('invalidField');
// //   }

// //   const token = jwt.sign(
// //     { data: { displayName: 'Categories.displayName, email: 'Categories.email } },
// //     process.env.JWT_SECRET,
// //     jwtConfig,
// //   );

// //   return token;
// // };

// // const get'Categories = async (id) => {
// //   const 'Categories = await 'Categories.findByPk(id, {
// //     attributes: ['id', 'displayName', 'email', 'image'],
// //   });

// //   if ('Categories === null) {
// //     throw new Error(''CategoriesNotExist');
// //   }

// //   return 'Categories;
// // };

module.exports = {
  postCreate,
};
