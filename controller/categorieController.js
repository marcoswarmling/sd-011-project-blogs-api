const categorieService = require('../service/categorieService');

const controllerInsertCategorie = async (req, res) => {
    const { name } = req.body;
    const insertCategorie = await categorieService.serviceInsertCategories(name);
    return res.status(201).send(insertCategorie);
};

const controllerFindAll = async (req, res) => {
    const findAll = await categorieService.serviceFindCategories();
    return res.status(200).send(findAll);
};

module.exports = {
    controllerInsertCategorie,
    controllerFindAll,
};