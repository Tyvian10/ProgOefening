import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({input, output});

let getal;

do{
   getal = parseFloat(await userInput.question('Geef een getal in: '));
}while (getal & 2 == 0 && getal & getal == 0);

console.log('Je gekozen getal is een priemgetal');