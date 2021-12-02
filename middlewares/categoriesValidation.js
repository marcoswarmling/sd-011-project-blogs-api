const emptyCategorieField = new Error('emptyCategorieField');

async function nameValidation(req, _res, next) {
  const { name } = req.body;

  if (!name || name === '') throw emptyCategorieField;

  next();
}

module.exports = {
  nameValidation,
};
