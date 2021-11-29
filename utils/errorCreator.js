module.exports = (status) => {
  const error = new Error();
  error.statusCode = status;
  return error;
};