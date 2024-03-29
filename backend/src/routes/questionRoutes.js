const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Routes
router.post('/addquestion', questionController.createQuestion);
router.get('/viewquestion', questionController.getQuestions);
router.delete('/deletequestion/:id', questionController.deleteQuestion);


module.exports = router;
