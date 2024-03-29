const Question = require('../models/Question');

// Create a new question
exports.createQuestion = async (req, res) => {
  try {
    const { question, topic, status } = req.body;
    const newQuestion = new Question({ question, topic, status });
    await newQuestion.save();
    res.json(newQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Get all questions
exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Delete a question by ID
exports.deleteQuestion = async (req, res) => {
  const id = req.params.id;
  try {
    // Find the question by ID and delete it from the database
    await Question.findByIdAndDelete(id);
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    console.error('Error deleting question:', error);
    res.status(500).json({ error: 'An error occurred while deleting the question' });
  }
};
