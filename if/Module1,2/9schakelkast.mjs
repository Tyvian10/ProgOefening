// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereidennode


let serie = await userInput.question('Wat is jou favoriete serie?')
console.log("p1")
let plaats;
console.log("test")
switch(serie){
    case "The Simpsons":
        console.log("entry")
        plaats = "Springfield";
        console.log( serie + " vindt plaats in " + plaats + "." )
    break;
    case 'Spongebob Squarepants':
        plaats = "Bikini Broek"
        console. log ( serie + " vindt plaats in" + plaats + ".")
    break;
    case 'Zondag met Lubach':
        plaats = Hilversum
        console. log ( serie + " vindt plaats in" + plaats + ".")
    break;
    default:
        console.log("wrong input")
    break;


}