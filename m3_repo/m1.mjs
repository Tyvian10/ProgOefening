import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({input, output});


let som = 0;

while (true) {
    let getal = parseFloat(await userInput.question('Voer een getal in: '));

    if (getal <= 0) { 
        console.log('De som van de ingegeven getallen is: ' + som);
        break;
    }
    som += getal;  
}

process.exit();