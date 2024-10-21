


import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({input, output});

let serie = await userInput.question('Geef een serie in: ');

function favorieteSerie(serie) {
    let locatie;

    if (serie === 'Doctor Who') { // Gebruik '===' voor vergelijking
        locatie = 'Galifrey';
        console.log('Je gekozen serie ' + serie + ' vindt plaats in ' + locatie + '.');
    } else {  // Gebruik 'else' correct
        console.log('Sorry, ik weet niet waar ' + serie + ' zich afspeelt.');
    }
}

favorieteSerie(serie);  // Roep de functie aan met de ingevoerde serie

userInput.close();  // Sluit de readline interface
