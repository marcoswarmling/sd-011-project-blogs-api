const verifyName = (name) => {
  if (!name || name.length === 0) {
    return {
      err: {
        status: 400,
      },
      message: '"name" is required',
    };
  }
  return null;
};

module.exports = {
  verifyName,
};
