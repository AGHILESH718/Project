let images = [
    "dice_1.png",
    "dice_2.jpeg",
    "dice_3.jpeg",
    "dice_4.jpeg",
    "dice_5.jpeg",
    "dice_6.jpeg"
];

let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });

        // Generate random values for each die
        let dieOneValue = Math.floor(Math.random() * 6);
        let dieTwoValue = Math.floor(Math.random() * 6);

        console.log(dieOneValue, dieTwoValue);

        // Set new images for the dice
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);

        // Display the total roll
        document.querySelector("#tot").innerHTML =
            "Your roll is " + ((dieOneValue + 1) + (dieTwoValue + 1));
    }, 1000);
}
