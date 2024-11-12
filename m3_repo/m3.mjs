import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({input, output});

 
let getal = parseFloat(await userInput.question("Vul het een getal in: "));
 
for (let i = 2; i < getal; i++){
    let priemGetal = true;
    for (let j = 2; j < i; j++){
        if (i % j == 0){
            priemGetal = false;
        }
    }
    if(priemGetal == true){
        console.log(`${i} is een priemgetal`);
    }
}
 
process.exit();
 