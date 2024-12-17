const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    testResults: {
        cholesterol: Number,
        bloodSugar: Number,
        hemoglobin: Number,
    },
    reportData: { summary: String, chartData: Array },
}, { timestamps: true });

module.exports = mongoose.model('Report', reportSchema);
