const verifyIfCategoriesExists = (categoriesIdToCheck, existsCategories) => {
  const verifiedCategories = categoriesIdToCheck.map((categoryIdCheck) => {
    const wasFound = existsCategories.find((category) => category.id === categoryIdCheck);
    if (!wasFound) return false;
    return true;
  });
  if (verifiedCategories.includes(false)) {
    return {
      type: 'error',
      code: '400',
      message: '"categoryIds" not found',
    };
  }
  return {
    type: 'success',
  };
};

const validateTitle = (title) => {
  if (!title) return { type: 'error', code: 400, message: '"title" is required' };
};

const validateContent = (content) => {
  if (!content) return { type: 'error', code: 400, message: '"content" is required' };
};

const validateCategoryIds = (categoryIds) => {
  if (!categoryIds) return { type: 'error', code: 400, message: '"categoryIds" is required' };
};

function validatePostData(title, content, categoryIds) {
  if (validateTitle(title)) return validateTitle(title);
  if (validateContent(content)) return validateContent(content);
  if (validateCategoryIds(categoryIds)) return validateCategoryIds(categoryIds);
  return { type: 'success' };
}

module.exports = {
  verifyIfCategoriesExists,
  validatePostData,
};
