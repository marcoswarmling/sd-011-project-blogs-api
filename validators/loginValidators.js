const checkIfPasswordIsCorrect = (passwordFromDb, passwordFromLogin) => {
  if (passwordFromDb === passwordFromLogin) {
    return { type: 'success' };
  }
  return { type: 'error', code: 400, message: 'Invalid fields' };
};

module.exports = {
  checkIfPasswordIsCorrect,
};