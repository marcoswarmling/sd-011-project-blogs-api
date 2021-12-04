const { Categories } = require('../models');

const serviceInsertCategories = async (name) => {
    try {
        const insertCategorie = await Categories.create({ name });
        return insertCategorie;
    } catch (error) {
        return error;
    }
};

const serviceFindCategories = async () => {
    try {
        const findAll = await Categories.findAll();
        return findAll;   
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    serviceInsertCategories,
    serviceFindCategories,
};