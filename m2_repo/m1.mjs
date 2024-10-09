import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });

let artiest1 = "Red Hot Chili Peppers";
let artiest2 = "AC/DC";
let artiest3 = "Netsky";
let artiest4 = "De Strangers";

console.log('Kies een artiest:');
console.log('1. ' + artiest1);
console.log('2. ' + artiest2);
console.log('3. ' + artiest3);
console.log('4. ' + artiest4);

let keuze = parseFloat(await userInput.question('Kies een artiest (1-4): '));

switch(keuze) {
    case 1:
        console.log('Je koos voor Red Hot Chili Peppers');
        console.log('Deze artiest is achter de hit: Californication');
        break;
    case 2:
        console.log('Je koos voor AC/DC');
        console.log('Deze artiest is achter de hit: Thunderstruck');
        break;
    case 3:
        console.log('Je koos voor Netsky');
        console.log('Deze artiest is achter de hit: Rio');
        break;
    case 4:
        console.log('Je koos voor De Strangers');
        console.log('Deze artiest is achter de hit: Antwarpe');
        break;
    default:
        console.log('Ongeldige keuze, probeer het opnieuw.');
        break;
}
