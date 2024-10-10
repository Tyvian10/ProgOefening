import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getal = parseFloat(await userInput.question('Voer een getal in:'));

let kleinsteGetal = getal;
let grootsteGetal = getal;
let gemiddelde = getal;

getal = parseFloat(await userInput.question('Voer een getal in:'));

kleinsteGetal = getal;
grootsteGetal = getal;
gemiddelde = getal;

getal = parseFloat(await userInput.question('Voer een getal in:'));

kleinsteGetal = getal;
grootsteGetal = getal;
gemiddelde = getal;

getal = parseFloat(await userInput.question('Voer een getal in:'));

kleinsteGetal = getal;
grootsteGetal = getal;
gemiddelde = getal;

getal = parseFloat(await userInput.question('Voer een getal in:'));

kleinsteGetal = getal;
grootsteGetal = getal;
gemiddelde = getal;




if (getal<kleinsteGetal){
    kleinsteGetal = getal;
} else if(getal > grootsteGetal){
    grootsteGetal = getal;
}

gemiddelde += getal;

console.log('Het kleinste getal is: ' + kleinsteGetal);
console.log('Het gemiddelde is: ' + gemiddelde);
console.log('Het grootste getal is: '+ grootsteGetal);
