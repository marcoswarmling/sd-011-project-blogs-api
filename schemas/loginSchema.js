const { emailCheck, passCheck } = require('./userSchema');

const loginValid = (email, password) => {
    const emailError = emailCheck(email);
    if (emailError.message) return { statusCode: emailError.code, message: emailError.message };
    const passError = passCheck(password);
    if (passError.message) return { statusCode: passError.code, message: passError.message };
    return {};
};

module.exports = {
    loginValid,
};
