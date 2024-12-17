const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) throw { status: 401, message: 'Unauthorized' };
        req.user = user;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = authMiddleware;
