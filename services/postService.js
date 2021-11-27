const { BlogPost, PostsCategorie, Categorie, User } = require('../models');

const create = async (title, content, categoryIds, userId) => {
  const response = await BlogPost.create({
    title,
    content,
    categoryIds,
    userId,
  });

  categoryIds.forEach(async (id) => {
    await PostsCategorie.create({ postId: response.id, categoryId: id });
  });

  return response;
};

const getAll = async () => {
  const posts = await BlogPost.findAll();
  const postCategories = await PostsCategorie.findAll();
  const categories = await Categorie.findAll();

  const response = posts.map(async (post) => {
    const user = await User.findOne({ where: { id: post.userId } });

    const removePassword = Object.entries(user.dataValues).filter(
      (el) => el[0] !== 'password',
    );

    const formatedUser = Object.fromEntries(removePassword);

    const postcategories = categories.filter(({ id }) =>
      postCategories.some(({ postId }) => id === postId));

    const categoriesName = categories.filter(({ id }) =>
      postcategories.some((p) => p.id === id));

    return { ...post.dataValues, user: formatedUser, categories: categoriesName };
  });

  const getResponse = await Promise.all(response).then((post) => post);

  return getResponse;
};

const findById = async (id) => {
  const allPosts = await getAll();

  const postId = allPosts.filter((post) => post.id === Number(id));

  return postId;
};

const updateById = async (title, content, id, userId) => {
  const [updated] = await BlogPost.update({ title, content }, { where: { id, userId } });

  if (!updated) {
    return { error: 'Unauthorized user' }; 
  }

  const allPosts = await getAll();

  const postById = allPosts.filter((post) => post.id === id);

  return postById[0];
};

const deletePost = async (id, userId) => {
  const post = await BlogPost.findByPk(id);

  if (!post) return { code: 404, message: 'Post does not exist' };

  const destroy = await BlogPost.destroy({ where: { id, userId } });

  if (!destroy) {
    return { code: 401, message: 'Unauthorized user' };
  }
};

const deleteUser = async (userId) => { 
  await User.destroy({ where: { id: userId } });
};

module.exports = {
  create,
  getAll,
  findById,
  updateById,
  deletePost,
  deleteUser,
};
