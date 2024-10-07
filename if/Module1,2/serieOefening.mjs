// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereidennode


let serie = await userInput.question('Wat is jou favoriete serie?')
console.log(serie)