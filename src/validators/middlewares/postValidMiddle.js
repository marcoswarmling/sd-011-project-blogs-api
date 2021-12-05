const { category: { getAllByArrayIds } } = require('../../services');
const getByArrayIds = require('../../utils/getByArrayIds');

const STATUS_BAD_REQUEST = 400;
const MSG_MISSING_TITLE = '"title" is required';
const MSG_EMPTY_TITLE = '"title" is not allowed to be empty';
const MSG_MISSING_CONTENT = '"content" is required';
const MSG_EMPTY_CONTENT = '"content" is not allowed to be empty';
const MSG_MISSING_CATEGORY = '"categoryIds" is required';
const MSG_EMPTY_CATEGORY = '"categoryIds" is not allowed to be empty';
const MSG_CATEGORY_NOT_FOUND = '"categoryIds" not found';

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

function contentValidator(content) {
  if (typeof content === 'undefined') {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_CONTENT };
  }

  if (!content) {
    return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_CONTENT };
  }

  return {};
}

async function categoryIdsValidator(categoryIds) {
  if (typeof categoryIds === 'undefined') {
    return { status: STATUS_BAD_REQUEST, message: MSG_MISSING_CATEGORY };
  }

  if (!categoryIds) {
    return { status: STATUS_BAD_REQUEST, message: MSG_EMPTY_CATEGORY };
  }
  const categories = await getByArrayIds(categoryIds, getAllByArrayIds);

  if (categoryIds.length !== categories.length) {
    return { status: STATUS_BAD_REQUEST, message: MSG_CATEGORY_NOT_FOUND };
  }

  return {};
}

module.exports = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  
  try {
    const titleResult = titleValidator(title);
    if (titleResult.status) {
      return res.status(titleResult.status).json({ message: titleResult.message });
    }
  
    const contentResult = contentValidator(content);
    if (contentResult.status) {
      return res.status(contentResult.status).json({ message: contentResult.message });
    }
  
    const categoryIdsResult = await categoryIdsValidator(categoryIds);
    if (categoryIdsResult.status) {
      return res.status(categoryIdsResult.status).json({ message: categoryIdsResult.message });
    }
    next();
  } catch (error) {
    next(error);
  }
};