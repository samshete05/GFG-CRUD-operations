const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
   //studentschema
   Name:{
    type:String,
    requred:true
   },
   Email:{
    type:String,
    requred:true
   },
   Branch:{
    type:String,
    requred:true
   },
   Mobileno:{
    type:String,
    requred:true
   },
})

module.exports = mongoose.model("Students",studentSchema)
