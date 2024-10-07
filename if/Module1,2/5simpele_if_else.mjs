import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let getal1 = parseFloat(await userInput.question('Geef een getal1 in:'));
let getal2 = parseFloat(await userInput.question('Geef een getal2 in:'));


if(getal1 < getal2){
    console.log(getal2);
    }else{
        console.log(getal1);
    }