var userInput = +prompt("Enter any number");

var randomNumber = Math.ceil(Math.random() * 9);

console.log("Random number:", randomNumber);

if (userInput === randomNumber) {
    alert("Congratulations");
} else {
    alert("Better luck next time");
}