import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('voer een getal in: '));
let getal2 = parseFloat(await userInput.question('voer een getal in'));


function som(getal1, getal2){
let totaal = getal1 + getal2;
console.log('De som van deze getallen is ' + totaal);
}

som(getal1,getal2);

process.exit();