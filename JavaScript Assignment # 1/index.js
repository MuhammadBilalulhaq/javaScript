
var number1=+prompt("Enter a first number");
var operator=+prompt("Enter a operator");
var number2=+prompt("Enter a second number");

var output=document.getElementById("output");
if(operator === "+"){
    output.innerHTML=number1+number2;
}
else if(operator === "-"){
    output.innerHTML=number1-number2;
}
else if(operator==="/"){
    output.innerHTML=number1/number2;
}
else if(operator === "*"){
    output.innerHTML=number1*number2;
}
