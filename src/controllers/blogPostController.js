const { BlogPosts } = require('../models');
const { tokenJwtIsValid } = require('../auth/validateJWT');

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

module.exports = {
    postRegistration,
};