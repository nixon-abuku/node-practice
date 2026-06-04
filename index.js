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
app.put('/jobs/:id', function(req, res){
    const foundJob = jobs.find(function(job){
    return job.id === Number(req.params.id);
    })
    if (!foundJob){
    return res.status(404).json({"Message": "Job not found"});
    }
    foundJob.company = req.body.company;
    foundJob.role = req.body.role;
    foundJob.status = req.body.status;
    res.status(200).json({"Message":"Job Updated"});
});
app.delete('/jobs/:id', function(req, res){
    const jobIndex = jobs.findIndex(function(job){
        return job.id === Number(req.params.id);
    });
    if (jobIndex === -1){
        return res.status(404).json({"Message": "Job not found"});
    }
     jobs.splice(jobIndex, 1);
     res.status(200).json({"Message": "Job deleted Successfully"});
});

app.use(function(req,res){
    return res.status(404).json({"Message": "Route not Found"})
});
app.use(function(err, req, res, next){
    return res.status(500).json({"Message": "Internal server error "})
});
app.listen(3000, function(){
    console.log("Server started");
});


