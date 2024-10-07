 

// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereidennode

let som = 0;
//teller = teller + 1
for(let teller = 1; teller <= 20; teller++){

    
    //process.stdout.write("hello: ");
    som += teller;

    process.stdout.write("som: " + som + " teller: " + teller)
    console.log()
}
