const errors = require('../../../schemas/errorMessage');

const validateTitle = (title) => {
  if (!title) return errors.blogPost.titleNotExistent;
};

const validateContent = (content) => {
  if (!content) return errors.blogPost.contentNotExistent;
};

const validateCategoryIds = async (categoryIds) => {
  if (!categoryIds) return errors.blogPost.categoryIdNotExistent;
};

module.exports = async (request, _response, next) => {
  const { title, content, categoryIds } = request.body;
  const validatorsDictionary = {
    title: validateTitle,
    content: validateContent,
    categoryIds: validateCategoryIds,
  };
  const properties = [{ title }, { content }, { categoryIds }];

  for (let index = 0; index < properties.length; index += 1) {
    const property = properties[index];
    const [key, value] = Object.entries(property)[0];
    const validationError = validatorsDictionary[key](value);
    if (validationError) return next(validationError);
  }

  return next();
};