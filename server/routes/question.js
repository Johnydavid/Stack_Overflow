const router = require('express').Router();

let Question = require('../models/question');

// Create Operation
router.route('/').post((req, res)=>{

    const title = req.body.title;
  const question = req.body.question;
//   const tags = req.body.tags;
//   const created_at = req.body.Date;

    
    const newQuestion = new Question({
        title,
        question
        // tags,
        // created_at
    });

    newQuestion.save()
    .then( () => {
     res.json('Question Added');
          })
          .catch( (err) => {
           res.status(400).json('Error: ' + err);
          });

});

// Read Operation
    router.route('/viewquestion').get((req, res)=>{
    Question.find()
    .then(question =>(res.json(question)))
    .catch(err=>{
        res.status(400).json('Error : ' + err)
    })

});


// To select a specific record


//  router.route('/:id').get((req, res)=>{
//     Question.findById(req.params.id)
//     .then(pizza =>(res.json(pizza)))
//     .catch(err=>{
//         res.status(400).json('Error : ' + err)
//     })

// });


// Update  Operation
router.route('/update/:id').put((req, res)=>{
    Question.findByIdAndUpdate(req.params.id)
    .then(p => {
        p.title = req.body.title,
        p.question = req.body.question
        // p.tags = req.body.tags,
        // p.created_at = req.body.created_at        
   


    p.save()
    .then( () => {
     res.json('Question Updated');
          })
          .catch( (err) => {
           res.status(400).json('Error: ' + err);
          });
})

});


// To Delete a specific record


 router.route('/:id').delete((req, res)=>{
    Question.findByIdAndDelete(req.params.id)
    .then(res.json("Question Deleted"))
    .catch(err=>{
        res.status(400).json('Error : ' + err)
    })

});

module.exports = router;