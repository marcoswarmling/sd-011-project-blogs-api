const categorieService = require('../service/categorieService');

const controllerInsertCategorie = async (req, res) => {
    const { name } = req.body;
    const insertCategorie = await categorieService.serviceInsertCategories(name);
    return res.status(201).send(insertCategorie);
};

module.exports = {
    controllerInsertCategorie,
};