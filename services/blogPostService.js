const validateTitle = async (title) => {
    if (!title) {
        return {
            message: '"title" is required',
            status: 400,
        };
    }
    return null;
};

const validateContent = async (content) => {
    if (!content) {
        return {
            message: '"content" is required',
            status: 400,
        };
    }
    return null;
};

const validateId = async (categoryIds, categories) => {
    if (!categoryIds) {
        return {
            message: '"categoryIds" is required',
            status: 400,
        };
    }
    const everyCategoryId = categories.map((element) => element.id);

    const checkEveryCategory = categoryIds.every((element) => everyCategoryId.includes(element));

    if (!checkEveryCategory) {
        return {
            message: '"categoryIds" not found',
            status: 400,
        };
    }
    return null;
};

module.exports = {
    validateTitle,
    validateContent,
    validateId,
};