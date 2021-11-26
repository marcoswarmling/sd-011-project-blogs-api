const userService = require('../service/user');

const createNewUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const response = await userService.createNewUser(
      displayName, email, password, image,
    );
    if (response.err) {
      const { err, message } = response;
      return res.status(err.status).json({ message });
    }
    return res.status(201).json({ token: response });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const response = await userService.getAllUsers();
    return res.status(200).json(response);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await userService.getUserById(id);

    if (response.err) {
      const { err, message } = response;
      return res.status(err.status).json({ message });
    }

    return res.status(200).json(response);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
};
