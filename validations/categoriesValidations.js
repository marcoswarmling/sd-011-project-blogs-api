function categorieNameValidation(name) {
  if (!name || name.length < 1) {
    return { error: { message: '"name" is required' } };
  }
  return true;
}

module.exports = { categorieNameValidation };