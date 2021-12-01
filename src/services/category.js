const { Category } = require('../models');

// const STATUS_NOT_FOUND = 404;
// const MSG_CATEGORY_NOT_FOUND = 'Category does not exist';

// const getAll = async () => { // For model test
//   try {
//     const result = await Category.findAll();

//     return result;
//   } catch (error) {
//     return error;
//   }
// };

const createIt = async (CategoryData) => {
  try {
    const result = await Category.create(CategoryData);

    return result;
  } catch (error) {
    return error;
  }
};

// const getById = async (id) => {
//   try {
//     const result = await Category.findByPk(id);
//     if (result === null) {
//       return { 
//         status: STATUS_NOT_FOUND, 
//         message: MSG_CATEGORY_NOT_FOUND,
//       };
//     }

//     return result;
//   } catch (error) {
//     return error;
//   }
// };

module.exports = { createIt };