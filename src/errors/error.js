module.exports = class Error extends Error {
  constructor({ message, code }) {
    super(message);
    this.code = code;
  }
};
