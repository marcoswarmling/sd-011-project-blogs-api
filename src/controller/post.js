const postService = require('../service/post');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  try {
    const response = await postService.createPost(title, content, categoryIds);
    if (response.err) {
      const { err, message } = response;
      return res.status(err.status).json({ message });
    }

    return res.status(201).json(response);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  createPost,
};