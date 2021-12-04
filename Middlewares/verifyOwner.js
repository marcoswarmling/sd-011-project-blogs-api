const { BlogPost } = require('../models');
const { status, postMessages, intServerError } = require('../Helpers/status&messages');

const verifyOwner = async (req, res, next) => {
  try {
    const { id: postId } = req.params;
    const { id: idUser } = req.user;
    
    const findPost = await BlogPost.findOne({ where: { id: postId } });
    if (!findPost) { 
      return res.status(status.notFound).json({ message: postMessages.postNotExist }); 
    }
    const { userId } = findPost.dataValues;
    if (userId !== idUser) {
      return res.status(status.unauth).json({ message: postMessages.unauthUser });
    }
    next();
  } catch (error) {
    return res.status(status.intServerError).json({ message: intServerError.unknown });
  }
};

module.exports = { verifyOwner }; 
