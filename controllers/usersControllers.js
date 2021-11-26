const userServices = require('../services/userServices');

// const getAllUsers = async (req, res) => {
//   const users = await User.findAll();

//   res.status(200).json(users);ff
// });

// const getByIdUser = ('/:id', async (req, res) => {
//   const { id } = req.params;
//   const user = await User.findByPk(id);

//   res.status(200).json(user);
// });

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  try {
    const token = await userServices.createUser(displayName, email, password, image);

    if (token.error && token.error === 'Email_Exists') {
      return res.status(409).json({ message: 'User already registered' });
    }
    return res.status(201).json({ token });
  } catch (e) {
    return res.status(500).json({ message: 'Erro no servidor!' });
  }
};

// const updateUser =  async (req, res) => {
//   const { id } = req.params;
//   const {  } = req.body;

//   res.status(200).json({});
// };

// const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   res.status(200).json({});
// };

module.exports = { createUser };