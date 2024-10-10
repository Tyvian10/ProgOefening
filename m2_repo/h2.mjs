import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let jaartal = parseFloat(await userInput.question('Wat is het jaartal?'));

if (jaartal % 400 === 0) {
    console.log('Februari telt 29 dagen');
} else if (jaartal % 100 === 0) {
    console.log('Februari telt 28 dagen');
} else if (jaartal % 4 === 0) {
    console.log('Februari telt 29 dagen');
} else {
    console.log('Februari telt 28 dagen');
}




