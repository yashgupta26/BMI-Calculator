const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded( { extended : true}));

app.get("/" , function(req , res){
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator" , function(req , res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight/(height * height);

    res.send("Your bmi is " + bmi);
});





app.listen(3000,function(){
    console.log("server starting at port 3000");
});