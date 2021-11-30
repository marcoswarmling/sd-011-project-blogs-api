module.exports = (object) => {
  if (!object.content) return { code: 400, message: '"content" is required' };
  if (!object.title) return { code: 400, message: '"title" is required' };
  if (object.categoryIds) return { code: 400, message: 'Categories cannot be edited' };
  return null;
};