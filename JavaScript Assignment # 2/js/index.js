function displayValue(value){
    let display=document.getElementById("display");
    display.value+=value;
}
function clearDisplay(){
document.getElementById("display").value="";
}
function calculate() {
    let display = document.getElementById("display");

    display.value = eval(display.value);
}
function deleteLast() {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}