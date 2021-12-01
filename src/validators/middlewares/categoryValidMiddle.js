const STATUS_BAD_REQUEST = 400;
const MSG_MISSING_NAME = '"name" is required';
const MSG_EMPTY_NAME = '"name" is not allowed to be empty';

async function nameValidator(name) {
  if (typeof name === 'undefined') {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_NAME };
  }
  
  if (!name) {
    return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_NAME };
  }

  return {};
}

module.exports = async (req, res, next) => {
  const { name } = req.body;
  
  const nameResult = nameValidator(name);
  if (nameResult.status) { 
    return res.status(nameResult.status).json({ message: nameResult.message });
  }

  next();
};