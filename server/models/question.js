const mongoose = require("mongoose");

const questionSchema =  mongoose.Schema({
  title: String,
  question: String
//   tags: [],
//   created_at: {
//     type: Date,
//     default: Date.now(),
//   },
//   user: Object,
//   comment_id: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Comments"
//   },
});


 const Question = mongoose.model("Question", questionSchema);

 module.exports = Question;




