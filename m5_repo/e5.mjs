import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({input, output});


let max = parseFloat(await userInput.question('Geef een nummer in'))


let min = parseFloat(await userInput.question('Geef een nummer in'))



function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(min,max))