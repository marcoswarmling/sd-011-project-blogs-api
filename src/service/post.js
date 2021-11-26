const createPost = async (title, content, categoryIds) => {
  const isValidName = verifyName(name);
  if (isValidName) return isValidName;

  // const newCategory = await Category.create({ name });
  return newCategory;
};

module.exports = {
  createPost,
};