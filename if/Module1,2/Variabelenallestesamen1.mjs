import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Voeg hier je eigen code in

let koffie = parseFloat(await userInput.question('Hoeveel koffie drinkt u gemiddeld per dag? '));
let jaar = 365

console.log('Op jaarbasis drinkt u ' + ( koffie * jaar ) + ' glazen per dag')

