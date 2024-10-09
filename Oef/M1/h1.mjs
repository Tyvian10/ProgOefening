// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });
// Einde van userInput voorbereiden

// Vraag de gebruiker om input
let dagen = parseFloat(await userInput.question('Geef het aantal dagen: '));
let uren = parseFloat(await userInput.question('Geef het aantal uren: '));
let minuten = parseFloat(await userInput.question('Geef het aantal minuten: '));
let seconden = parseFloat(await userInput.question('Geef het aantal seconden: '));

// Bereken de totale tijd in seconden
let totaalSeconden = (dagen * 24 * 3600) + (uren * 3600) + (minuten * 60) + seconden;

// Toon het resultaat
console.log('Dit is de totale tijd in seconden: ' + totaalSeconden);

// Sluit de interface
userInput.close();




