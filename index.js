const express = require('express');
const app = express();

const jobs = [
    {"id": 1, "company": "google", "role": "SWE", "status": "APPLIED"},
    {"id": 2, "company": "Meta", "role": "Data Analyst", "status": "REJECTED"},
    {"id": 3, "company": "Amazon", "role": "Project Manage", "status": "INTERVIEW"}
]
app.get('/', function(req, res) { 
    res.json({"message": "Hello Nixon"});
    });
app.get('/jobs', function(req, res){
    res.json(jobs);
});

app.listen(3000, function(){
    console.log("Server started")
});
