/* 
allCategories = [
  {
    "id": 1,
    "name": "Escola"
  },
  {
    "id": 2,
    "name": "Inovação"
  }
]
*/

module.exports = (categoryIds, allCategories) => {
  const idsArray = allCategories.map(({ id }) => id); // trata allCategories e retorna [1, 2]

  return categoryIds.every((category) => idsArray.includes(category)); // true or false
};
