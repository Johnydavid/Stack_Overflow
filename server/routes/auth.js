const router = require('express').Router();
const {stackUser} = require("../models/stackUsers");
const joi = require("joi");
const bcrypt = require("bcrypt");

router.post("/", async(req, res)=>{
    try{
        const{error}=validate(req.body);
        if(error)
        return res.status(400).send({message: error.details[0].message});

        const user = await stackUser.findOne({email: req.body.email});
        if(!user)
        return res.status(401).send({message: "Email not registered"});

        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );
        if(!validPassword)
        return res.status(401).send({message: "Invalid Password"});
        
        const token = user.generateAuthToken();
        res.status(200).send({message: "Logged in Successfully"});      
    }
    catch(error){
        res.status(500).send({message: "Internal Server Error"});
        console.log(error);
    }
});

const validate = (data)=>{
    const schema = joi.object({
        email: joi.string().email().required().label("Email"),
        password: joi.string().required().label("Password")
    });
    return schema.validate(data);
}

module.exports = router


