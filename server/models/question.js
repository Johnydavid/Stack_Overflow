const mongoose = require('mongoose');

  // Derive a Schema

  const QuestionSchema = mongoose.Schema({
    title: String,
    question: String,
    
  });

  //  Compile Schema to Model

  const Question = mongoose.model("Question", QuestionSchema );

  module.exports = Question;