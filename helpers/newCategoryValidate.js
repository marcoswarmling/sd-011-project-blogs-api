module.exports = ({ name }) => {
  if (!name) return { code: 400, message: '"name" is required' };
  return null;
};