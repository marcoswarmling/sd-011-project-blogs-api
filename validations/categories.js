const validateName = (name) => {
  if (!name) {
    return { err: {
      message: '"name" is required',
      code: 400,
    } };
  }

  return null;
};

const validateCategory = (name) => {
  const nameValidator = validateName(name);
  return nameValidator;
};

module.exports = {
  validateCategory,
};