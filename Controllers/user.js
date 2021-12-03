const { 
  getUserEmailServ,
  insertUserServ,
  getAllUsersServ,
  getUserById } = require('../services/user');

async function getUserEmailCtrl(email) {
  const registeredUser = await getUserEmailServ(email);
  if (!registeredUser) {
    return null;
  }
  return registeredUser;
}

async function insertUserCtrl(req, res) {
  const bodyData = req.body;
  const insertData = await insertUserServ(bodyData);
  return res.status(201).json({ token: insertData });
}

async function getAllUsersCtrl(_req, res) {
  const usersData = await getAllUsersServ();
  return res.status(200).send(Object.values(usersData));
}

async function checkToken(req, res, next) {
  const { token } = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  next();
}

async function getUserByIdCtrl(req, res) {
  const { id } = req.params;
  const user = await getUserById(id);
  if (user.error) {
    return res.status(404).json({ message: user.error });
  }
  return res.status(200).json(user);
}

module.exports = {
  insertUserCtrl,
  getUserEmailCtrl,
  getAllUsersCtrl,
  checkToken,
  getUserByIdCtrl,
};
