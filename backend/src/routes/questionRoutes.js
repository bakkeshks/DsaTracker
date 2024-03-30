const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes
router.post('/addquestion', authMiddleware, questionController.createQuestion);
router.get('/viewquestion', authMiddleware, questionController.getQuestions);
router.delete('/deletequestion/:id', authMiddleware, questionController.deleteQuestion);


module.exports = router;
