// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden


let Taal = await userInput.question('Welke taal spreekt u? ');


if(Taal == "NL"){
    console.log('Goeiendag');}
    else if(Taal == FR){
    console.log('Bonjour');}
    else if(Taal == "EN"){
    console.log('Hello');
}else{
    console.log('Deze taal wordt niet ondersteund');
}


