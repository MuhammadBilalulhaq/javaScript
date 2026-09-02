var numbers = [];

function onClick(image) {

    var randomNumber = Math.ceil(Math.random() * 6);

    numbers.push(randomNumber);

    document.getElementById(image).innerHTML = randomNumber;

    // Check after all 6 cards are clicked
    if (numbers.length == 7) {

        var count = 0;

        for (var i = 0; i <= numbers.length; i++) {

            count = 0;

            for (var j = 0; j <= numbers.length; j++) {

                if (numbers[i] == numbers[j]) {
                    count++;
                }
            }

            if (count >= 3) {
                alert("Congratulations! You won 🎉");
                return;
            }
        }

        alert("Better luck next time!");
    }
}

function resetGame() {

    // Clear arrays
    numbers = [];
    clickedCards = [];

    // Put card images back
    for (var i = 1; i <= 7; i++) {

        document.getElementById("image" + i).innerHTML =
            '<img src="./assets/card-back.jpg" onclick="onClick(\'image' + i + '\')">';
    }
}