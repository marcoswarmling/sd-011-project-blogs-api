const blogPostServices = require('../services/blogPostServices');

const post = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { data } = req.userInfo;
    const result = await blogPostServices.post(title, content, categoryIds, data);
    return res.status(201).json(result);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: e.message });
  }
};

module.exports = {
  post,
};
