import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({input, output});

async function persoonlijkeBegroeting() {
    const naam = await userInput.question('Wat is je naam?: ');
    console.log('Goeiendag ' + naam);
    userInput.close(); // Vergeet niet de interface te sluiten na gebruik
}

persoonlijkeBegroeting();
