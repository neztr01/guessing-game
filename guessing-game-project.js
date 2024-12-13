/*
Expected output:

Enter a max number: *20*
Enter a min number: *11*
I'm thinking of a number between 11 and 20...
Enter a guess: *15*
Too high.
Enter a guess: *11*
Too low.
Enter a guess: *13*
Too high.
Enter a guess: *12*
Correct!
YOU WON.
*/

const { read } = require("fs");
const readline = require("readline");

const guessingGame = () => {
    // create the interface
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // create a function for the entire process
    // initialize 3 variables to store the numbers
    // and the random generated
    let max, min, randomNumber;

    // chain the questions answers
    // begin with the questions for the max and min numbers
    rl.question("Enter a max number: ", (maxNum) => {
        // assign the numbers passed by user
        max = parseInt(maxNum);
        // ask for the min number
        rl.question("Enter a min number: ", (minNum) => {
            // assign the numbers passed by user
            min = parseInt(minNum);
            // create the randomNumber
            randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

            console.log(`I'm thinking of a number between ${max} and ${min}...`);
            // begin to handle the guessings
            handleGuess();
        })
    });

    function handleGuess() {
        rl.question("Enter a guess: ", (guess) => {
            if(guess > randomNumber) {
                console.log("Too high");
                handleGuess();
            } else if(guess < randomNumber) {
                console.log("Too low");
                handleGuess();
            } else {
                console.log("Correct!");
                console.log("YOU WON!");
                rl.close();
            }
        })
    }

}

guessingGame();
