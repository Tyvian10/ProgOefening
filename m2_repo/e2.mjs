import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let minimum = 10
let maximum = 20

let getal = parseFloat (await userInput.question('voer een getal in'));

if 
(getal > 10 && getal < 20){
    console.log('Dit getal ligt tussen 10 en 20');
} else {
    console.log('Je getal ligt niet tussen 10 en 20');



userInput.close();
}