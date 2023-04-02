const router = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const {Question} = require('../models/question');
const {User} = require('../models/user');

// router.get('/get/all', (req, res) => {
//     Question.find().sort({_id: -1}).limit(100)
//     .then(questions => res.json(questions))
//     .catch(err => res.status(500).json(err))
// })

// router.route('/:id').get((req, res) =>{
//     Question.findById(req.params.id)
//         .then(question=>(res.json(question)))
//         .catch(err=>{
//             res.status(400).json('Error : ' + err)
//     });

// });


 

router.post("/",  async (req, res) => {
    try{
        // const{error}=validate(req.body);
        // if(error)
        // return res.status(400).send({message: error.details[0].message});
        // const user = await User.findOne({email: req.body.email});
        // if(!user)
        // return res.status(401).send({message: "Email not registered"});

         const {token, title, body} = req.body;
        // //Validating asker
        // await User.findOne({email: asker, token}, (err, user) => {
        // if(err) res.status(500).json("Something went wrong.")
        // else if(!user) res.status(403).json("Permission denied.")
        // else{
            const newQuestion = new Question({title, body})
            newQuestion.save()
            .then(() => res.json({"message": "Success", "id": newQuestion._id}))
          
        // }
    // })
}
     catch(error){
        res.status(500).send({message: "Internal Server Error"});
        console.log(error);
    }
});



 
    


// router.post('/api/answer', jsonParser, (req, res) => {
//     const {answer, token, answerer, question} = req.body;
//     //Validating answerer
//     User.findOne({email: answerer, token}, (err, user) => {
//         if(err) res.status(500).json("Something went wrong.")
//         else if(!user) res.status(403).json("Permission denied. ")
//         else{
//             Question.findOne({_id: question}, (err, question) => {
//                 if(err || !question) res.status(500).json("Something went wrong.")
//                 else{
//                     question.answers.push({answerer: user, answer})
//                     question.save()
//                     .then(() => res.json({message: "Success"}))
//                 }
//             })
//         }
//     })
// })

module.exports = router;


