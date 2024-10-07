// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden

let som;
let getal1 = parseFloat(await userInput.question('Geef een getal1 in:'));
let getal2 = parseFloat(await userInput.question('Geef een getal2 in:'));

som = getal1 + getal2;
console.log("De uitkomst van je getallen is " + som)
// Voeg hier je eigen code in



process.exit();