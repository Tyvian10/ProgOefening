// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereidennode


let getal = 0

while(getal <= 12){
    console.log(getal);
    getal += 3;


    
}