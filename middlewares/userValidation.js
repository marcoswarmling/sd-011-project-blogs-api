const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv');

const emailExist = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
        return res.status(409).json({ message: 'User already registered' });
    }
     next();
};

const emailValidation = async (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /\w+@\w+/g.test(email);
    if (!email || email === undefined) {
        return res.status(400).json({ message: '"email" is required' });
    }
    if (!emailRegex) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    next();
};

const nameValidation = async (req, res, next) => {
    const { displayName } = req.body;

    if (displayName.length < 8) {
        return res.status(400)
        .json({ message: '"displayName" length must be at least 8 characters long' });
    }
    next();
};

const passwordValidation = async (req, res, next) => {
    const { password } = req.body;
    if (!password || password === undefined) {
        return res.status(400).json({ message: '"password" is required' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: '"password" length must be 6 characters long' });
    }
    next();
};

const emailEmpty = async (req, res, next) => {
    const { email } = req.body;
    if (email === '') {
        return res.status(400).json({ message: '"email" is not allowed to be empty' });
    }
    if (!email || email === undefined) {
        return res.status(400).json({ message: '"email" is required' });
    }
    next();
};

const passwordEmpty = async (req, res, next) => {
    const { password } = req.body;
    if (password === '') {
        return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }
    if (!password || password === undefined) {
        return res.status(400).json({ message: '"password" is required' });
    }
    next();
};

const tokenValidation = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    nameValidation,
    emailValidation,
    passwordValidation,
    emailExist,
    emailEmpty,
    passwordEmpty,
    tokenValidation,
};
