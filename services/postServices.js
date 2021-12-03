const { BlogPosts, Categories, Users } = require('../models/index');
const { NOT_FOUND, STATUS_OK } = require('../utils/statusMessage');

/* const getAllPost = async (searchParam) => {
  const allPosts = await BlogPosts.findAll({
    where: searchParam && searchParam !== '' ? { 
        [Op.or]: [
          { title: { [Op.like]: `%${searchParam}%` } },
          { content: { [Op.like]: `%${searchParam}%` } },
        ],
      } : null,
    attributes: { exclude: ['UserId'] },
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!allPosts) throw new Error('No posts found');
  return allPosts;
}; */

const getOnePost = async (id) => {
  console.log('entrou no getONEPOST');
  const foundPost = await BlogPosts.findByPk(id, {
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!foundPost) return { status: NOT_FOUND, message: { message: 'Post does not exist' } };

  return { status: STATUS_OK, message: foundPost };
};

module.exports = {
  getOnePost,
};
