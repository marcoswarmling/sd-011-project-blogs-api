const { BlogPost } = require('../models');
const { status, postMessages } = require('../Helpers/status&messages');

const verifyOwner = async (req, res, next) => {
  try {
    const { id: postId } = req.params;
    const { id: idUser } = req.user;
    
    const { dataValues } = await BlogPost.findOne({ where: { id: postId } });
    if (dataValues.userId !== idUser) {
      return res.status(status.unauth).json({ message: postMessages.unauthUser });
    }
    next();
  } catch (error) {
    return res.status(status.intServerError).json({ message: postMessages.postNotExist });
  }
};

module.exports = { verifyOwner }; 
