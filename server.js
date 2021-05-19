const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request,response){
    response.sendFile(__dirname+"/index.html")
});

app.post('/calculation', function(request, response){
    var num1= Number(request.body.num1);
    var num2= Number(request.body.num2);
    var fun= request.body.function;
    if(fun =="Addition"){
        var result = num1 + num2;
        response.send("the result of addition is "+ result);
    }else if(fun == 'Substraction'){
        var result = num1 - num2;
        response.send("the result of Substraction is "+ result);
    }else if(fun == "Multiplication"){
        var result = num1 * num2;
        response.send("the result of Multiplication is "+ result);
    }else if( fun == "Division"){
        var result = num1 / num2;
        response.send("the result of Division is "+ result);
    }
});


app.listen(8000, function(){
    console.log("Server running on port 8000")
});