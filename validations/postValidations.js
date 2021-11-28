function titleValidation(title) {
  if (!title || title.length < '') {
    return false;
  }
  return true;
}

function contentValidation(content) {
  if (!content || content.length < '') {
    return false;
  }
  return true;
}

function categoryIdsValidation(categoryIds) {
  if (!categoryIds || categoryIds.length < '') {
    return false;
  }
  return true;
}

function createPostValidation(title, content, categoryIds) {
  if (!titleValidation(title)) {
    return { error: { message: '"title" is required' } };
  }
  if (!contentValidation(content)) {
    return { error: { message: '"content" is required' } };
  }
  if (!categoryIdsValidation(categoryIds)) {
    return { error: { message: '"categoryIds" is required' } };
  }
  return true;
}

module.exports = { createPostValidation };