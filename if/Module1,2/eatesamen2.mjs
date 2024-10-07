import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let num1 = await userInput.question("Geef een nummer in: ")
let num2 = await userInput.question("Geef een tweede in:")

if (num1 >=0 && num2 >=0){
    console.log(num1 + " en " + num2 + " zijn beide positief");
}
else if (num1 <=0 && num2 >=0){
    console. log(num1 + " is negatief en " + num2 + "is positief." );
}
else if (num1 <= 0 && num2 >=0){
    console.log('beide getallen zijn negatief.');
}
else if  (num1 ==0 || num2 ==0){
    console.log('Een van de getallen is gelijk aan 0.');
}

