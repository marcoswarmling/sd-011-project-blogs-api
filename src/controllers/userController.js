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

module.exports = {
    userRegistration,
};