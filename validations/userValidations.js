const validateDisplayName = (displayName) => displayName.length === 8;

const validateEmail = (email) => {
  const emailRegex = new RegExp(
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
  );
  return emailRegex.test(email);
};
  
  const validatePassword = (password) => password.length === 6;
  
module.exports = (displayName, email, password) => (
  validateDisplayName(displayName)
  && validateEmail(email)
  && validatePassword(password)
);
