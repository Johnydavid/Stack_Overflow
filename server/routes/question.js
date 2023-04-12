const router = require("express").Router();
// const{User, validate} = require("../models/user");
const Joi = require("joi");
const QuestionStore = require("../models/question");

// Create Operation
router.route("/").post((req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const title = req.body.title;
    const question = req.body.question;

    const newQuestion = new QuestionStore({
      title,
      question,
    });

    newQuestion.save();

    res.json("Question Added");
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

const validate = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().label("Title"),
    question: Joi.string().required().label("Question"),
  });
  return schema.validate(data);
};

module.exports = router;
