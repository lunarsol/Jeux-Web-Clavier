import { generate } from "random-words";

// Arrays containing words and phrases to rewrite
const words = ["tekno", "music", "apple"];
const phrases = ["Tekno is really cool", "I love life", "Music is poetic"];

// Variable to store the number of points
let points = 0;

// Function to display the score
function score() {
    alert(`Your score is ${points} points`);
}

// Function to set a loop limit (rounds or turns)
function setLoopLimit(scoreLimit) {
    if (scoreLimit === "y") {
        let limit = parseInt(prompt("How many rounds do you want?"));
        if (!isNaN(limit) && limit > 0) {
            return limit;
        } else {
            alert("You must enter a positive number.");
        }
    } else if (scoreLimit === "n") {
        alert("Alright, you won't have a limit!");
        return Infinity;
    } else {
        alert("You must enter 'y' or 'n'");
        // You can add logic to handle a new input attempt if necessary.
    }
}

// Calling the function to set the loop limit
let loopLimit = setLoopLimit(prompt("Do you want a score limit? y/n"));

// Function to set the game mode (phrases or words)
function setGameMode(choice) {
    while (choice !== 1 && choice !== 2) {
        if (choice === 1) {
            alert("You chose the word mode");
        } else if (choice === 2) {
            alert("You chose the phrase mode");
        } else {
            alert("The choice is not correct");
        }
    }
}

// Asking the user to choose the game mode (phrases or words)
let gameMode = prompt("Do you want to play with phrases (type 2) or with words (type 1)");

// Converting the choice to a number
gameMode = Number(gameMode);

// Calling the function to set the game mode
setGameMode(gameMode);

// Checking the game mode and loop limit
if (Number(gameMode) === 1 || Number(gameMode) === 2) {
    // Variable to count the performed turns
    let turnsPerformed = 0;

    // Main game loop
    while (turnsPerformed < loopLimit) {
        let question, response;

        // Choosing the question based on the game mode
        if (Number(gameMode) === 1) {
            question = `The word to rewrite is ${words[points]}`;
            response = prompt(question);
        } else if (Number(gameMode) === 2) {
            question = `The phrase to rewrite is ${phrases[points]}`;
            response = prompt(question);
        }

        // Checking the response and updating points
        if (response === (Number(gameMode) === 1 ? words[points] : phrases[points])) {
            points += 1;
        }

        // Incrementing the number of turns performed
        turnsPerformed += 1;

        // Displaying the score after each turn
        score();
    }

    // If you reach this point, it means the loop ended because the number of turns is reached.
} else {
    alert("Invalid choice");
}
