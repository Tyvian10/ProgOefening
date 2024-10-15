import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + ' FizzBuzz');
    } else if (i % 3 === 0) {
        console.log(i + ' Fizz');
    } else if (i % 5 === 0) {
        console.log(i + ' Buzz'); 
    } else {
        console.log(i);  
    }
}

process.exit();