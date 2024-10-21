import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

// Vraag de gebruiker om invoer
let hoogte = parseInt(await userInput.question('Geef de hoogte van de piramide in: '));
let startTopInput = await userInput.question('Moet de piramide van boven naar beneden gaan? (true/false): ');
let startLeftInput = await userInput.question('Moet de piramide links beginnen? (true/false): ');
let startGetal = parseInt(await userInput.question('Geef het startgetal voor de piramide in: '));  // Vraag het startgetal

// Zet de invoer om naar boolean waarden
let startTop = startTopInput.toLowerCase() === 'true';
let startLeft = startLeftInput.toLowerCase() === 'true';  // Deze variabele is nog niet gebruikt, maar kan later worden toegevoegd

// Functie voor normale nummerpiramide
function nummerPiramide(hoogte, getal) {
    for (let i = 1; i <= hoogte; i++) {
        let rij = '';
        for (let j = 1; j <= i; j++) {
            rij += getal + ' ';  // Voeg het getal toe aan de rij, gevolgd door een spatie
            getal++;  // Verhoog het getal voor de volgende stap
        }
        console.log(rij.trim());  // Print de rij zonder extra spatie aan het eind
    }
}

// Functie voor omgekeerde nummerpiramide
function nummerPiramideOmgekeerd(hoogte, getal) {
    for (let i = hoogte; i >= 1; i--) {
        let rij = '';
        for (let j = 1; j <= i; j++) {
            rij += getal + ' ';  // Voeg het getal toe aan de rij, gevolgd door een spatie
            getal++;  // Verhoog het getal voor de volgende stap
        }
        console.log(rij.trim());  // Print de rij zonder extra spatie aan het eind
    }
}

// Functie aanroepen op basis van de boolean waarden
if (startTop === true) {
    // Normale nummerpiramide
    console.log("Normale nummerpiramide:");
    nummerPiramide(hoogte, startGetal);
} else {
    // Omgekeerde nummerpiramide
    console.log("Omgekeerde nummerpiramide:");
    nummerPiramideOmgekeerd(hoogte, startGetal);
}

// Sluit de readline-interface
userInput.close();
