const catNameValid = (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({
            message: '"name" is required',
        });
    }
};

module.exports = {
    catNameValid,
};