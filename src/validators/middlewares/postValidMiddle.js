const STATUS_BAD_REQUEST = 400;
const MSG_MISSING_TITLE = '"title" is required';
const MSG_EMPTY_TITLE = '"title" is not allowed to be empty';
const MSG_MISSING_CONTENT = '"content" is required';
const MSG_EMPTY_CONTENT = '"content" is not allowed to be empty';

function titleValidator(title) {
  if (typeof title === 'undefined') {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_TITLE };
  }

  if (!title) {
    return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_TITLE };
  }

  // if (title.length < 8) {
  //   return { status: STATUS_BAD_REQUEST, message: MSG_TITLE_LENGTH };
  // }
  
  return {};
}

module.exports = async (req, res, next) => {
  const { title } = req.body;
  
  const titleResult = titleValidator(title);
  if (titleResult.status) {
    return res.status(titleResult.status).json({ message: titleResult.message });
  }

  next();
};