const mongoose = require("mongoose");

//
const packageSchema = new mongoose.Schema({
  place: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  num: {
    type: String,
    trim: true,
    required: true,
  },
  sdate: {
    type: String,
    trim: true,
    required: true,
  },
  edate: {
    type: String,
    trim: true,
    required: true,
  },
  rate:{
    type: String,
    trim: true,
    required: true,
  },
  profile:{
    type:String,
    required:true,
    trim:true
}
});

const packages=mongoose.model("packages",packageSchema)
module.exports=packages