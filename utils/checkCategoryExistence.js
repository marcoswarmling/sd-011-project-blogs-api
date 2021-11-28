const checkCategoryExistence = (postCategories, existingCategories) => {
  const teste = postCategories.map((postCategory) =>
    existingCategories.find(
      (existingCategory) => postCategory === existingCategory.id,
    ));
  if (teste.includes(undefined)) {
    return false;
  }
  return true;
};

module.exports = checkCategoryExistence;
