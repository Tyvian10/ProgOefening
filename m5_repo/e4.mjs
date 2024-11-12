import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({input, output});

const number = await userInput.question('Welke vorm wilt u berekenen (Vierkant, Rechthoek, Cirkel)?: ');

function factorial(number) {
    let result = 1;

   
    for (let i = 1; i <= number; i++) {
        
        result = result *=i;
    }

    return result;
   
}

 console.log(factorial)