const nameIsRequired = {
  err: {
    status: 400,
  },
  message: '"name" is required',
};

const titleIsRequired = {
  err: {
    status: 400,
  },
  message: '"title" is required',
};

const contentIsRequired = {
  err: {
    status: 400,
  },
  message: '"content" is required',
};

const categoryIdsIsRequired = {
  err: {
    status: 400,
  },
  message: '"categoryIds" is required',
};

const categoryIdsNotFound = {
  err: {
    status: 400,
  },
  message: '"categoryIds" not found',
};

module.exports = {
  nameIsRequired,
  titleIsRequired,
  contentIsRequired,
  categoryIdsIsRequired,
  categoryIdsNotFound,
};
