 const { Users } = require('../models');
 const { createNewToken } = require('../auth/createJWT');

const userRegistration = async (req, res) => {
    try {
    const { displayName, email, password, image } = req.body;
    const newUser = await Users.create({
        displayName,
        email,
        password,
        image,
    });
    const token = await createNewToken(newUser);
    return res.status(201).json({ token });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const getAllUsers = async (_req, res) => {
    try {
    const findAllUsers = await Users.findAll();
    return res.status(200).json(findAllUsers);
} catch (error) {
    return res.status(500).json({
        message: error.message,
    });
}
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const userById = await Users.findOne({ id });
        return res.status(200).json(userById);
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    userRegistration,
    getAllUsers,
    getUserById,
};