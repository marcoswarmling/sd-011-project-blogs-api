const categoryService = require('../service/category');

const createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    const response = await categoryService.createCategory(name);
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
  createCategory,
};
