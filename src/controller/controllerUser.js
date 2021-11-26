const ServiceUser = require('../service/serviceUser');

async function create(req, res) {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await ServiceUser.create(displayName, email, password, image);

    if (newUser.message) {
      return res.status(409).json(newUser);
    }
    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

async function getAll(req, res) {
  try {
   const allUsers = await ServiceUser.getAll();

   if (!allUsers) {
     return res.status(400).json({ message: 'Not users found' });
   }

   return res.status(200).json(allUsers);
  } catch (e) {
    console.log(e.message);
    return res.status(200).json({ message: 'Algo deu errado' });
  }
}

async function getById(req, res) {
  try {
    const { id } = req.params;
    const getUserById = await ServiceUser.getById(id);

    if (!getUserById) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(getUserById);
  } catch (e) {
    console.log(e.message);
    return res.status(200).json({ message: 'Algo deu errado' });
  }
}

module.exports = { create, getAll, getById };
