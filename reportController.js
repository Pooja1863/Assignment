const Report = require('../models/reportModel');

const createReport = async (req, res, next) => {
    try {
        const { testResults } = req.body;
        const reportData = generateSmartReport(testResults);
        const report = await Report.create({ userId: req.user.id, testResults, reportData });
        res.status(201).json(report);
    } catch (error) {
        next(error);
    }
};

const getReports = async (req, res, next) => {
    try {
        const reports = await Report.find({ userId: req.user.id });
        res.json(reports);
    } catch (error) {
        next(error);
    }
};

// Example smart report generation function
const generateSmartReport = (testResults) => {
    const summary = 'Your health is good!';
    const chartData = [{ label: 'Cholesterol', value: testResults.cholesterol }];
    return { summary, chartData };
};

module.exports = { createReport, getReports };
