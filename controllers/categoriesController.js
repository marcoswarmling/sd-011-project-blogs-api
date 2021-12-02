const categoriesSevice = require('../services/categoriesService');

async function findOrCreate(req, res) {
  const { name } = req.body;
  const category = await categoriesSevice.findOrCreate(name);

  return res.status(201).json(category);
}

async function getAllcategories(req, res) {
  const categories = await categoriesSevice.getAllcategories();

  return res.status(200).json(categories);
}

// async function findOne(req, res) {
//   const { email, password } = req.body;
//   const categoriesToken = await categoriesSevice.findOne(email, password);

//   return res.status(200).json({ token: categoriesToken });
// }

// async function getcategories(req, res) {
//   const { id } = req.params;
//   const categories = await categoriesSevice.getcategories(id);

//   return res.status(200).json(categories);
// }

module.exports = {
  findOrCreate,
  getAllcategories,
  // findOne,
  // getcategories,
};
