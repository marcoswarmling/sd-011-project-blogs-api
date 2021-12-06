const validBody = (req, res, next) => {
    const bodyReq = req.body;
    const size = Object.keys(bodyReq).length;
    if (size > 3) {
        console.log('entrei aqui');
        return res.status(400).json({
            message: 'Categories cannot be edited',
        });
    }
    next();
};

module.exports = {
    validBody,
};