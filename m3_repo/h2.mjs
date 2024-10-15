import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { transferableAbortController } from 'node:util';
const userInput = readline.createInterface({input, output});




let teller = 1;

let getal = 0;
let gemiddelde = 0;

do {
getal += parseFloat(await userInput.question('Geef een getal in: '));
teller ++;

gemiddelde = getal / teller;
console.log('Dit is het gemiddelde: ' + gemiddelde + '.');



}while (gemiddelde < 25);


console.log( 'Het gemiddelde is groter dan 25.')

