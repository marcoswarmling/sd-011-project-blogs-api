const validCategoryName = (name) => {
  if (!name) return { type: 'error', code: 400, message: '"name" is required' };
  if (name === '') return { type: 'error', code: 400, message: '"name" is required' };
  return { type: 'success' };
};

module.exports = {
  validCategoryName,
};