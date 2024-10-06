

    const express = require("express")
    const connectDB = require("./Database/database")
    const student_records = require("./Schema/Records")
    const mongoose = require("mongoose");

    const app = express()
    const port = 8001

    app.use(express.json())

    //post method on add url
    app.post('/add',async(req,res)=>{
        console.log(req.body)
        const studentData = req.body
        const students = new student_records(studentData)
        let data = await students.save()
        res.send(data)
    })

    //get method
    app.get("/add",async(req,res)=>{
        let data = await student_records.find()
        res.send(data)
        console.log(data)
    })

//update method
    app.put("/add/:id",async(req,res)=>{
    const StudentId=req.params.id
    try{
        const UpdateStudent = await student_records.findByIdAndUpdate(StudentId,req.body,{new:true})
        if(!UpdateStudent){
            res.send("Student Not found by this ID")
        }
        else{
            res.status(200).send(UpdateStudent)
        }
    }catch(err){
            res.status(500).send({ error: 'Error in updating Student Record.' })
    }
    })

    //delete method
    app.delete("/add/:id",async (req, res) => {
    const StudentId = req.params.id
    // console.log(StudentId)
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

