import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });



let getal1 = parseFloat(await userInput.question('Voer een getal in: '));
let getal2 = parseFloat(await userInput.question('Voer een getal in: '));






let bewerking1 = 'Optellen';
let bewerking2 = 'Aftrekken';
let bewerking3 = 'Vermenigvuldigen';
let bewerking4 = 'Verdelen';

console.log('1. ' + bewerking1);
console.log('2. ' + bewerking2);
console.log('3. ' + bewerking3);
console.log('4. ' + bewerking4);







let keuze = parseFloat(await userInput.question('wat wilt u doen? '));

switch(keuze){
        case 1:
          console.log(getal1+getal2);
        break;

        case 2:
            console.log(getal1-getal2);
        break;
       
        case 3:
            console.log(getal1* getal2);
        break;
       
        case 4:
            console.log(getal1 / getal2);
        break;

        default:
            console.log('Ongeldige keuze, probeer opnieuw');
        break;






}
