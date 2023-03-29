const { Db } = require("mongoDB");
const mongoose = require("mongoose");

module.exports = () => {
  try {

 

 

    const uri = process.env.ATLAS_URI;
    mongoose.connect(uri,{});
    console.log("Connected to Database Successfully");
  } catch (error) {
    console.log(error);
    console.log("Connection Failed");
  }
};
