const isValidEmail = (email) => email.match(/[\w\d.+_-]+@[\w]+.com/);

module.exports = { isValidEmail };
