const router = require("express").Router();
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
      question
    });

    newQuestion.save();

    res.json("Question Added");
  } 


  catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
  
});

// Read Operation
    router.route("/read").get((req, res)=>{
    QuestionStore.find()
    .then(question =>(res.json(question)))
    .catch(err=>{
        res.status(400).json('Error : ' + err);
    })

});


// To select a specific record


 router.route('/:id').get((req, res)=>{
    QuestionStore.findById(req.params.id)
    .then(question =>(res.json(question)))
    .catch(err=>{
        res.status(400).json('Error : ' + err)
    })

});


// // Update  Operation
router.route('/update/:id').put((req, res)=>{
    QuestionStore.findByIdAndUpdate(req.params.id)
    .then(quest => {
        quest.title = req.body.title,
        quest.question = req.body.question  
   
    quest.save()
    .then( () => {
     res.json('Question Updated');
          })
          .catch( (err) => {
           res.status(400).json('Error: ' + err);
          });
})

});


// // To Delete a specific record


 router.route('/:id').delete((req, res)=>{
    QuestionStore.findByIdAndDelete(req.params.id)
    .then(res.json("Question Deleted"))
    .catch(err=>{
        res.status(400).json('Error : ' + err)
    })

});



const validate = (data) => {
  const schema = Joi.object({
    title: Joi.string().required().label("Title"),
    question: Joi.string().required().label("Question"),
  });
  return schema.validate(data);
};

module.exports = router;
