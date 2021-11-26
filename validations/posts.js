const validateTitle = (title) => {
  if (!title) return { err: { message: '"title" is required', code: 400 } };

  return null;
};

const validateContent = (content) => {
  if (!content) return { err: { message: '"content" is required', code: 400 } };

  return null;
};

const validateCategoryIds = (categoryIds) => {
  if (!categoryIds) return { err: { message: '"categoryIds" is required', code: 400 } };

  return null;
};

const createPostFields = ({ title, content, categoryIds }) => {
  const validTitle = validateTitle(title);
  if (validTitle) return validTitle;
  const validContent = validateContent(content);
  if (validContent) return validContent;
  const validCategoryIds = validateCategoryIds(categoryIds);
  if (validCategoryIds) return validCategoryIds;

  return null;
};

module.exports = {
  createPostFields,
};