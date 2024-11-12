import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let getal = await userInput.question('Geef een getal in: ');
getal = parseInt(getal);

function somvanDelers(getal) {
    let som = 0;
    for (let i = 1; i < getal; i++) {
        if (getal % i === 0) {
            som += i;
        }
    }
    return som;
}

let som = somvanDelers(getal);

console.log('De som van de delers van ' + getal + ' zonder het getal zelf is ' + som + '.');

userInput.close();
