const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true
  },
  role:{
    type:String,
    enum:["User","Admin"],
    default:"User"
  }
});


module.exports = mongoose.model("User", userSchema);