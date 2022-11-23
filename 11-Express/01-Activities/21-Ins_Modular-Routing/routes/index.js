const index = require('express').Router();

// Import our modular routers for /tips and /feedback
const tipsRouter = require('./tips');
const feedbackRouter = require('./feedback');

//localhost:3001/api/tips/
index.use('/tips', tipsRouter);
//localhost:3001/api/feedback/
index.use('/feedback', feedbackRouter);

module.exports = index;
