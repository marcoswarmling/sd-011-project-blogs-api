const service = require('../services/user');

async function getUserEmailCtrl(email) {
  const registeredUser = await service.getUserEmailServ(email);
  if (!registeredUser) {
    return null;
  }
  return registeredUser;
}

async function insertUserCtrl(req, res) {
  const bodyData = req.body;
  const insertData = await service.insertUserServ(bodyData);
  return res.status(201).json({ token: insertData });
}

module.exports = {
  insertUserCtrl,
  getUserEmailCtrl,
};
