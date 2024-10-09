import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let maand = await userInput.question('Welke maand zijn we vandaag')

let aantaldagen = 0

switch(maand){
    case "januari":
    console.log('deze maand telt 31 dagen.')
    break;

    case "februari":
        console.log('deze maand telt 29 dagen.')
        break;


    case "maart":
        console.log('deze maand telt 31 dagen.')
        break;

 case "april":
        console.log('deze maand telt 30 dagen.')
        break;

 case "mei":
        console.log('deze maand telt 31 dagen.')
        break;

case "juni":
    console.log('deze maand telt 30 dagen.')
    break;

case "juli":
    console.log('deze maand telt 31 dagen.')
    break;

case "september":
    console.log('deze maand telt 30 dagen.')
    break;

case "oktober":
    console.log('deze maand telt 31 dagen.')
    break;

case "november":
    console.log('deze maand telt 30 dagen.')
    break;

case "december":
    console.log('deze maand telt 31 dagen.')
    break;

    
}

