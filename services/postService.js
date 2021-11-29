const { BlogPosts, PostsCategories } = require('../models');

const checkPermission = (post, userId) => {
  if (post.userId !== userId) throw new Error('ACCESS_DENIED');
};

const createPost = async ({ title, content, categoryIds }, { userId }) => {
  const newPost = await BlogPosts.create({ title, content, userId });

  const newPostCategories = categoryIds
  .map((category) => ({ postId: newPost.id, categoryId: category }));
  
  await PostsCategories.bulkCreate(newPostCategories);

  return newPost;
};

const getAllPosts = async () => {
  const posts = await BlogPosts.findAll({
    include: [{ all: true, attributes: { exclude: ['password'] } }],
  });

  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPosts.findOne({
    where: { id },
    include: [{ all: true, attributes: { exclude: ['password'] } }],
  });

    if (!post) throw new Error('INEXISTENT_POST');

  return post;
};

const updatePost = async ({ title, content }, { userId }, id) => {
  const post = await BlogPosts.findOne({
    where: { id },
    include: { model: PostsCategories, as: 'categories', through: { attributes: [] } },
  });

  if (!post) throw new Error('INEXISTENT_POST');

  checkPermission(post, userId);

  await BlogPosts.update(
    { title, content },
    { where: { id } },
  );
    post.title = title;
    post.content = content;
  return post;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
};