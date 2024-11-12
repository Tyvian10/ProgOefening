import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

// Vraag om de input
let start = await userInput.question('Met welk getal beginnen we? ');
let end = await userInput.question('Met welk getal eindigen we? ');
let deler1 = await userInput.question('Wat is het eerste getal waarop we testen? ');
let deler2 = await userInput.question('Wat is het tweede getal waarop we testen? ');
let deelbaar1 = await userInput.question('Moet het getal deelbaar zijn door deler1? (ja/nee) ');
let deelbaar2 = await userInput.question('Moet het getal deelbaar zijn door deler2? (ja/nee) ');

// Zet de input om naar getallen
start = parseInt(start);
end = parseInt(end);
deler1 = parseInt(deler1);
deler2 = parseInt(deler2);

// Functie om de getallen te controleren
function printDeelbareGetallen(start, end, deler1, deler2, deelbaar1, deelbaar2) {
    console.log(`Getallen tussen ${start} en ${end} die voldoen aan de voorwaarden:`);

    for (let i = start; i <= end; i++) {
        let isDeelbaarDoorDeler1 = i % deler1 === 0;
        let isDeelbaarDoorDeler2 = i % deler2 === 0;

        // Controleer of de gebruiker wil dat het getal deelbaar moet zijn of niet
        if ((deelbaar1 === 'ja' && isDeelbaarDoorDeler1) || (deelbaar1 === 'nee' && !isDeelbaarDoorDeler1)) {
            if ((deelbaar2 === 'ja' && isDeelbaarDoorDeler2) || (deelbaar2 === 'nee' && !isDeelbaarDoorDeler2)) {
                console.log(i);  // Print het getal dat voldoet aan de voorwaarden
            }
        }
    }
}

// Roep de functie aan
printDeelbareGetallen(start, end, deler1, deler2, deelbaar1, deelbaar2);

// Sluit de readline interface
userInput.close();