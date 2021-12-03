const { Categories } = require('../models/index');
const { CREATED, NOT_FOUND, STATUS_OK } = require('../utils/statusMessage');

const registerCategory = async (name) => {
  const result = await Categories.create({ name });
  console.log(result);
  const registeredCat = {
    id: result.id,
    name: result.name,
  };
  return { status: CREATED, message: registeredCat };
};

const getAll = async () => {
  const result = await Categories.findAll();

  if (!result) return { status: NOT_FOUND, message: { message: 'No users found' } };

  return { status: STATUS_OK, message: result };
};

module.exports = {
  registerCategory,
  getAll,
};