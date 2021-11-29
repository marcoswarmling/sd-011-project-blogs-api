const getRequiredFieldMessage = (field) => `"${field}" is required`;
const getMinimumLengthMessage = (
  field,
  minLength,
) => `"${field}" length must be ${minLength} characters long`;

module.exports = {
  getRequiredFieldMessage,
  getMinimumLengthMessage,
};
