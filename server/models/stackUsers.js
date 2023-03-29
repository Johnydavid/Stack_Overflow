const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

// Deriving Schema for stack_users

const userSchema = new mongoose.Schema({
  displayName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// Token Generation for Schema

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, {createdAt: ({
    type: Date,
    default: Date.now

  })},
    
process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};




// Compile Schema to Model

const stackUser = mongoose.model("stackUser", userSchema);

// Data Validation

const validate = (data) => {
  const schema = joi.object({
    displayName: joi.string().required().label("Display Name"),
    email: joi.string().required().label("Email"),
    password: joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = { stackUser, validate };
