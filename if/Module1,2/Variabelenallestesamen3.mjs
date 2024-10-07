import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Voeg hier je eigen code in

let gemiddelde = 0;
let getal1 = parseFloat(await userInput.question('voer een getal in '));
gemiddelde += getal1;

getal1 = parseFloat(await userInput.question('voer een getal in '));
gemiddelde += getal1;

getal1 = parseFloat(await userInput.question('voer een getal in '));
gemiddelde += getal1;

getal1 = parseFloat(await userInput.question('voer een getal in '));
gemiddelde += getal1;


console.log(getal1/4);

process.exit();

