const model = require('../models/userModel');
const validate = require('../middleware/validation');

const newUser = async (name, email, password) => {
    validate.notNull(name, email, password);
    await validate.alreadyExist(email, password);
    const { password: _, ...result } = await model.newUser(name, email, password);
    return result;
};

module.exports = {
    newUser,
}