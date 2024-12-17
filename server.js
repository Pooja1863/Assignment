const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const reportRoutes = require('./routes/reportRoutes');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/reports', reportRoutes);

// Error handling
app.use((err, req, res, next) => {
    const statusCode = err.status || 500;
    res.status(statusCode).json({ message: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
