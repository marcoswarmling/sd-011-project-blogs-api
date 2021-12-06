module.exports = async (categoryIds, service) => {
    try {
        const categories = await service(categoryIds);
        return categories;
    } catch (error) {
        return error;
    }
};