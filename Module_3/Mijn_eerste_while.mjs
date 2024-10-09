// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereidennode


let getal;
let som = 0;

while(som <= 100){
   getal = parseFloat(await userInput.question('Geef een getal in: '));
   som += getal;
}

for(let teller = 0; teller < 100; teller++)