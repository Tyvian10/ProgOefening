import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });
console.log ('welkom bij quiz! Beantwoord de volgende 5 vragen.')

let vraag1 = await userInput.question('Wat is de hoofdstad van Frankrijk? ');
let teller = 0;

if (vraag1 == 'Parijs') {
        console.log('Jouw antwoord: ' + vraag1);
        console.log('Juist antwoord!');
        teller++;
    
} else {
    console.log('FOut antwoord, het juiste antwoord is Parijs');
}

let vraag2 = parseFloat(await userInput.question('Hoeveel planeten zijn er in het zonnestelsel? '));

if (vraag2 == 8) {
        console.log('Jouw antwoord: ' + vraag2);
        console.log('Juist antwoord!');
        teller++;

    
} else {
    console.log('FOut antwoord, het juiste antwoord is 8');
}



let vraag3 = parseFloat(await userInput.question('Wat is het grootste zoogdier ter wereld? '));

if (vraag3 == 'blauwe vinvis') {
        console.log('Jouw antwoord: ' + vraag3);
        console.log('Juist antwoord!');
        teller++;

    
} else {
    console.log('FOut antwoord, het juiste antwoord is blauwe vinvis');
}


let vraag4 = parseFloat(await userInput.question('Wie schreef het toneelstuk Romeo en Julia? '));

if (vraag4 == 'Shakespeare') {
        console.log('Jouw antwoord: ' + vraag4);
        console.log('Juist antwoord!');
        teller++;

    
} else {
    console.log('FOut antwoord, het juiste antwoord is Shakespeare');
}

let vraag5 = parseFloat(await userInput.question('Hoeveel poten heeft een spin? '));

if (vraag5 == '8') {
        console.log('Jouw antwoord: ' + vraag5);
        console.log('Juist antwoord!');
        teller++;

    
} else {
    console.log('FOut antwoord, het juiste antwoord is 8');
}

console.log("je hebt " + teller + " vragen juist beantwoord")

process.exit();