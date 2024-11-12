import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function startGame() {
    const correctNumber = random(1, 10);
    let guessedCorrectly = false;
    let punt = 3; 

    while (!guessedCorrectly && punt > 0) {
        const userGuess = parseInt(await userInput.question("Raad een getal tussen 1 en 10: "));
        
        if (userGuess === correctNumber) {
            console.log("Je hebt het juiste nummer geraden!");
            guessedCorrectly = true; 
        } else if (userGuess < correctNumber) {
            console.log("Het geraden getal is kleiner dan het juiste getal.");
        } else {
            console.log("Het geraden getal is groter dan het juiste getal.");
        }

        punt--; 
        console.log('Je hebt ' + punt + ' levens over.');

        if (punt === 0 && !guessedCorrectly) {
            console.log("Je hebt geen levens meer. Het juiste nummer was " + correctNumber + ".");
        }
    }

    userInput.close();
}

startGame();




