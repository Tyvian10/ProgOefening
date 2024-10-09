import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let getal = parseFloat(await userInput.question('Voer een getal in: '));


if (getal %2 == 0){
    console.log('dit getal is even');
}else{ 
    console.log('dit getal is oneven');
}