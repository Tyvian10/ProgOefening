import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = 4
let ster = 0

for (let i = 1; i <= hoogte; i++) {
     ster = '';  
    for (let j = 1; j <= i; j++) {
        ster += '*'; 
    } 
    console.log(ster); 
}

for (let i = hoogte - 1; i >= 1 *i - 1; i--)  {
    ster += '';

}

for (let sterren = 1; sterren<= 2 * i - 1;sterren++) {
    ster += '*'
}


console.log(ster);



