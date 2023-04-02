const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

// Deriving Schema for stack_users

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
  

});

// Token Generation for Schema

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {expiresIn: "7d"});
  return token;
};




// Compile Schema to Model

const User = mongoose.model("user", userSchema);

// Data Validation

const validate = (data) => {
  const schema = joi.object({
   userName: joi.string().required().label("User Name"),
    email: joi.string().required().label("Email"),
    password: joi.string().required().label("Password"),
    
  });
  return schema.validate(data);
};

module.exports = { User, validate };
