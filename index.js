//npm init
//install express
//installing cors
//mongoose
//nodemon
//installing body-parser

//connect to mongodb
//model or schema for database info

const express = require("express")
const connectDB = require("./Database/database")
const student_records = require("./Schema/Records")
const mongoose = require("mongoose");

const app = express()
const port = 8001

//Middleware
app.use(express.json())

app.post('/add',async(req,res)=>{
    console.log(req.body)
    const studentData = req.body
    const students = new student_records(studentData)
    let data = await students.save()
    res.send(data)
})

app.get("/add",async(req,res)=>{
    let data = await student_records.find()
    res.send(data)
    console.log(data)
})


// to update the user info completely
// app.put("/add",async(req,res){

// })

app.delete("/add/:id",async (req, res) => {
    //take the student id and convert to integer
    const StudentId = parseInt(req.params.id)
    try{
       const deletedStudent = await student_records.findByIdAndDelete(StudentId)
       if(!deletedStudent){
        res.send("Student not found by this ID")
    }
        else{
            res.send("Student deleted successfully")
        }
    }catch(err){
        console.log(err)
    }
});


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

