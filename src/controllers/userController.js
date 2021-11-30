const { JWT } = require('../helppers/jwt');
const status = require('../schemas/errorCodes');
const userService = require('../services/userService');

  const create = async (req, res, next) => {
    const { displayName, email, password, image } = req.body;

    try {
      await userService.create({ displayName, email, password, image });

      const token = JWT({ displayName, email });

      return res.status(status.created).json({ token });
    } catch (error) {
      return next(error);
    }
  };

  const getAll = async (_req, res, next) => {
    try {
      const listUsers = await userService.getAll();

      return res.status(status.ok).json(listUsers);
    } catch (error) {
      return next(error);
    }
  };

  const getById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await userService.getById(id);
   
      return res.status(status.ok).json(user);
    } catch (error) {
      return next(error);
    }
  };

module.exports = {
  create,
  getAll,
  getById,
};