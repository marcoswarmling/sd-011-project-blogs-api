module.exports = async (categoryIds, service) => {
    const categories = await service(categoryIds);
    return categories;
};