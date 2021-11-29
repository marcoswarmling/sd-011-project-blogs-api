const getAllCategories = (categoryIds, categories) => {
  const categoriesById = categories.map(({ id }) => id);

  const verification = categoryIds.every((cat) => categoriesById.includes(cat));
  // Verifica se inclui a categoria passada por parâmetro.
  return verification;
};

module.exports = getAllCategories;