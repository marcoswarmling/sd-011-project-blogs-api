const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.SECRET || 'somethingForTheEvaluator';

const code = 400;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const messages = {
    sn: 'displayName length must be at least 8 characters long',  
    sp: 'password length must be at least 6 characers long',
    ie: 'email must be a valid email',
    er: 'email is required',
    dr: 'displayName is required',
    pr: 'password is required',
};

function tooShort(value, length) {
    if (value < length) return true;
}

const validateEmail = (email) => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) return true;
        return false;
};

const emailCheck = (email) => {
    switch (true) {
        case !email: return { code, message: messages.er };
        case validateEmail(email) !== true: return { code, message: messages.ie };
        default: return {};
    }
};

const nameCheck = (name) => {
    switch (true) {
        case !name: return { code, message: messages.er };
        case tooShort(name, 8): return { code, messages: messages.sn };
        default: return {};
    }
};

const passCheck = (password) => {
    switch (true) {
        case !password: return { code, message: messages.pr };
        case tooShort(password, 8): return { code, message: messages.sp };
        default: return {};
    }
};

const isValid = (displayName, email, password) => {
    const nameError = nameCheck(displayName);
    if (nameError.message) return { statusCode: nameError.code, message: nameError.message };
    const emailError = emailCheck(email);
    if (emailError.message) return { statusCode: emailError.code, message: emailError.message };
    const passError = passCheck(password);
    if (passError.message) return { statusCode: passError.code, message: passError.message };
    return {};
};

const validateJWT = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(code).json({ message: messages.mt });
    try {
        const decoded = jwt.verify(token, secret);
        if (!decoded) return res.status(code).json({ message: messages.jwt });
        const user = await User.findByEmail(decoded.data.email);
        if (!user) return res.status(code).json({ message: messages.jwt });
        req.user = user;
        next();
    } catch (err) {
       return res.status(code).json({ message: err.message });
   }
};

module.exports = {
    validateJWT,
    secret,
    jwtConfig,
    isValid,
};
