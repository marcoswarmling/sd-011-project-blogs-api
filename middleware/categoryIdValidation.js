const { Categories } = require('../models');

 async function validedCategoryId(req, res, next) {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    res.status(400).json({
      message: '"categoryIds" is required',

    });
    return;
  }
// const arrowFunction = (x)=>{
//   if(x!=3){
//     return "A";
//   }
//   return x*2
// }

// function lala(){
//   [1,2,3,4].map(arrowFunction)
// }

  const items = await Categories.findAll({ where: { id: categoryIds } });
  const itemsIds = items.map((i) => i.id);
  const missingCateogry = categoryIds.find((c) => !itemsIds.includes(c));

  if (missingCateogry) {
    res.status(400).json({
      message: '"categoryIds" not found' });
    return; 
  }
  next();

//   const isCategoryExist = categoryIds;
//   const allCategories = isCategoryExist
//     .map((categoryId) => Categories.findByPk(categoryId));
//   const hasInvalidCategory = await allCategories
//     .find(async (category) => !(await category)); 
//   if (!hasInvalidCategory) {
//     res.status(400).json({
//       message: '"categoryIds" not found' });
//     return; 
// }
//    next();  
}

module.exports = validedCategoryId;
