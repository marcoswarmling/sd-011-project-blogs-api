const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.SECRET || 'somethingForTheEvaluator';

const codes = {
    nf: 400,
    na: 401,
};

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const messages = {
    sn: '"displayName" length must be at least 8 characters long',  
    sp: '"password" length must be 6 characters long',
    ie: '"email" must be a valid email',
    er: '"email" is required',
    ee: '"email" is not allowed to be empty',
    ep: '"password" is not allowed to be empty',
    dr: '"displayName" is required',
    pr: '"password" is required',
    tr: '"title" is required',
    cr: '"content" is required',
    cir: '"categoryIds" is required',
    jwtm: 'Token not found',
    jwti: 'Expired or invalid token',
};

const tooShort = (value, length) => {
    if (value.length < length) return true;
};

const validateEmail = (email) => {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.match(validRegex)) return true;
        return false;
};

const emailCheck = (email) => {
    switch (true) {
        case typeof email === 'undefined': return { code: codes.nf, message: messages.er };
        case email.length === 0: return { code: codes.nf, message: messages.ee };
        case validateEmail(email) !== true: return { code: codes.nf, message: messages.ie };
        default: return {};
    }
};

const nameCheck = (name) => {
    switch (true) {
        case !name: return { code: codes.nf, message: messages.dr };
        case tooShort(name, 8): return { code: codes.nf, message: messages.sn };
        default: return {};
    }
};

const passCheck = (password) => {
    switch (true) {
        case typeof password === 'undefined': return { code: codes.nf, message: messages.pr };
        case password.length === 0: return { code: codes.nf, message: messages.ep };
        case tooShort(password, 6): return { code: codes.nf, message: messages.sp };
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
    if (!token) { 
        return res.status(codes.na).json({ message: messages.jwtm });
    }
    try {
        const decoded = jwt.verify(token, secret);
        if (!decoded) return res.status(codes.na).json({ message: messages.jwti });
        console.log(decoded.data);
        const user = await User.findOne({ where: { email: decoded.data.email } });
        // if (!user) return res.status(code).json({ message: messages.jwt });
        req.user = user;
        next();
    } catch (err) {
       return res.status(codes.na).json({ message: messages.jwti });
   }
};

module.exports = {
    validateJWT,
    secret,
    jwtConfig,
    isValid,
    emailCheck,
    passCheck,
    codes,
    messages,
};
