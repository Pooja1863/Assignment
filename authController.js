const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) throw { status: 401, message: 'Invalid email or password' };

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw { status: 401, message: 'Invalid email or password' };

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        next(error);
    }
};

module.exports = { register, login };
