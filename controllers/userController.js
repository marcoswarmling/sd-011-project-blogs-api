const userServices = require('../services/userServices');

const signUpUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userServices.registerUser(displayName, email, password, image);
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(409).json({ message: e.message });
  }
};

module.exports = {
  signUpUser,
};
