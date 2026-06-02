const express = require('express');
const app = express();
app.get('/', function(req, res){
    res.json("Hello World");
})
app.listen(4000, function(){
    console.log("Server started");
})