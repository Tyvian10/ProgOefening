import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

// Vraag de gebruiker om invoer
let hoogte = parseInt(await userInput.question('Geef de hoogte van de piramide in: '));
let startTopInput = await userInput.question('Moet de piramide van boven naar beneden gaan? (true/false): ');
let startLeftInput = await userInput.question('Moet de piramide links beginnen? (true/false): ');

// Zet de invoer om naar boolean waarden
let startTop = startTopInput.toLowerCase() === 'true';
let startLeft = startLeftInput.toLowerCase() === 'true';

// Functie voor normale sterrenpiramide
function sterrenPiramide(hoogte) {
    for (let i = 1; i <= hoogte; i++) {
        let sterren = '';
        for (let j = 1; j <= i; j++) {
            sterren += '*';
        }
        console.log(sterren);
    }
}

// Functie voor omgekeerde sterrenpiramide
function sterrenPiramideOmgekeerd(hoogte) {
    for (let i = hoogte; i >= 1; i--) {
        let sterren = '';
        for (let j = 1; j <= i; j++) {
            sterren += '*';
        }
        console.log(sterren);
    }
}

// Functie aanroepen op basis van de boolean waarden
if (startTop === true) {
    // Normale piramide
    console.log("Normale sterrenpiramide:");
    sterrenPiramide(hoogte);
} else {
    // Omgekeerde piramide
    console.log("Omgekeerde sterrenpiramide:");
    sterrenPiramideOmgekeerd(hoogte);
}

// Sluit de readline-interface
userInput.close();
