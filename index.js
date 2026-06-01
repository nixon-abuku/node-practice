const express = require('express');
const app = express();
app.use(express.json());

const jobs = [
    {"id": 1, "company": "google", "role": "SWE", "status": "APPLIED"},
    {"id": 2, "company": "Meta", "role": "Data Analyst", "status": "REJECTED"},
    {"id": 3, "company": "Amazon", "role": "Project Manage", "status": "INTERVIEW"}
]

app.get('/', function(req, res) { 
    res.json({"message": "Hello Nixon"});
    });
app.get('/jobs', function(req, res){
    res.status(200).json(jobs);
});

//POST 
app.post('/jobs', function(req, res){
    const newJob = {
        id: jobs.length + 1,
        company: req.body.company,
        role: req.body.role,
        status: req.body.status
    }
    jobs.push(newJob);
    res.status(201).json(newJob);
})


app.listen(3000, function(){
    console.log("Server started");
});
