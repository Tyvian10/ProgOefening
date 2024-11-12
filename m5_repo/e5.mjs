import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({input, output});


let max = 10

let min = 1


function random(min, max) {
    const nummer =  userInput.question('Geef een getal: ')
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(random(min,max))