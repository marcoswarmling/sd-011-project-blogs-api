const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv');

const createToken = (user) => {
    const { id, displayName, email, image } = user;
    
    const token = jwt.sign({ id, displayName, email, image }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    
    return token;
};

const createUser = async (req, res) => {
    const user = await User.create(req.body);
    const token = createToken(user);
    return res.status(201).json({ token });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    const token = createToken(user);
    return res.status(200).json({ token });
};

const getAllUsers = async (req, res) => {
    const users = await User.findAll();
    return res.status(200).json(users);
};

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
};
