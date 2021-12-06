const { BlogPosts } = require('../models');
const { tokenJwtIsValid } = require('../auth/verifyJWT');
const { postUpdate,
         findAllPosts,
          findAllPostsById } = require('../services/postsService');

const postRegistration = async (req, res) => {
    const { title, content } = req.body;
    const token = req.headers.authorization;
    const { id } = await tokenJwtIsValid(token).data;
    console.log(id);
    const newPost = await BlogPosts.create({
      title,
      content,
      userId: id,
    });
      return res.status(201).json(newPost);
};

const getAllPosts = async (_req, res) => {
    const posts = await findAllPosts();
    return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
 const { id } = req.params;
 const posts = await findAllPostsById(id);
    return res.status(200).json(posts[0]);
};

const getPostUpdate = async (req, res) => {
    const { id } = req.params;
    await postUpdate(req);
    const posts = await findAllPostsById(id);
    return res.status(200).json(posts[0]);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    const posts = await BlogPosts.destroy({ where: { id } });
    return res.status(204).json(posts);
};

const queryPost = async (req, res) => {
    const searchTerm = req.query.q;
    const posts = await findAllPosts();
    if (!searchTerm || searchTerm.length === 0) {
        return res.status(200).json(posts);
    }
    const filteredPosts = posts.filter(({ title, content }) => (
      title.includes(searchTerm) || content.includes(searchTerm)
    ));
return res.status(200).json(filteredPosts);
};

module.exports = {
    postRegistration,
    getAllPosts,
    getPostById,
    getPostUpdate,
    deletePost,
    queryPost,
};