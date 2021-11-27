const checkAllExists = (categoryIds, categories) => {
  const treatedCategories = categories.map(({ id }) => id);
  return categoryIds.every((c) => treatedCategories.includes(c));
};

module.exports = checkAllExists;
