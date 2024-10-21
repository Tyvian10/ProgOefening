import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

// Vraag de gebruiker om invoer
let number = parseInt(await userInput.question('Geef een startgetal in: '));
let hoogte = parseInt(await userInput.question('Geef de hoogte in: '));

// Functie om een nummerpiramide te genereren
function nummerPiramide(number, hoogte) {
    let getal = number;  // Startgetal om mee te beginnen
    for (let i = 1; i <= hoogte; i++) {
        let rij = '';  // Variabele om de getallen in elke rij te bewaren
        for (let j = 1; j <= i; j++) {
            rij += getal + ' ';  // Voeg het getal toe aan de rij, met een spatie erachter
            getal++;  // Verhoog het getal voor de volgende stap
        }
        console.log(rij.trim());  // Druk de rij af en verwijder overtollige spaties
    }
}

// Roep de functie aan met de ingevoerde waarden
nummerPiramide(number, hoogte);

// Sluit de readline-interface
userInput.close();