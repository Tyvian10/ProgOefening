import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Voeg hier je eigen code in


let celsius = parseFloat(await userInput.question('Hoeveel graden is het vandaag in celsius? '));


console.log('in fahrenheit is het ' +((celsius * 9 / 5) + 32) + ' graden.')

process.exit();