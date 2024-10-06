

    const express = require("express")
    const connectDB = require("./Database/database")
    const student_records = require("./Schema/Records")
    const mongoose = require("mongoose");
    const bcrypt = require('bcrypt');

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

    app.patch("/add/:id", async (req, res) => {
        const StudentId = req.params.id;
        const { Email } = req.body;  // Change here
    
        try {
            // Ensure the Email is provided
            if (!Email) {
                return res.status(400).send({ error: 'Email is required.' });
            }
    
            console.log("Updating student ID:", StudentId);
            console.log("Request body:", req.body);
    
            const updatedStudent = await student_records.findByIdAndUpdate(
                StudentId,
                { Email: Email },  // Change here
                { new: true }
            );
    
            console.log("Updated Student:", updatedStudent); // Log the result
    
            if (!updatedStudent) {
                return res.status(404).send("Student not found by this ID.");
            } else {
                return res.status(200).send(updatedStudent);
            }
        } catch (err) {
            console.error("Update Error:", err.message);
            return res.status(500).send({ error: 'Error in updating student email.' });
        }
    });
    
    

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

