const BlogPost = require('../services/blogpostService');

const createPost = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    // if (!categoryIds) return res.status(400).json({ message: '"categoryId" is required' });
    // const teste = await Category.findAll({
    //   where: { id: categoryIds },
    // });
    // if(teste.length !== categoryIds.length) return res.status(404).json({ message: '"categoryIds" not found' });

    // const data = await BlogPost.create({ title, content, userId: req.user.id });

    // const post = await BlogPost.findByPk(data.dataValues.id);
    // await post.addCategory(teste);
    const data = await BlogPost.createPost({ title, content, categoryIds, id });
    if (data.err) {
      return res.status(data.err.code).json(data.err.message); 
    }
    return res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong. Try again later' });
  }
};

module.exports = { createPost };
