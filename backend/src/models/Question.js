const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  topic: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['not started', 'completed', 'revised'],
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
