import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({input, output});

async function oppervlakteVorm() {
    const vorm = await userInput.question('Welke vorm wilt u berekenen (Vierkant, Rechthoek, Cirkel)?: ');

    if (vorm === 'Vierkant') {
        const basis = parseFloat(await userInput.question('Wat is de basis: '));
        const hoogte = parseFloat(await userInput.question('Wat is de hoogte: '));
        const vierkant = basis * hoogte;
        console.log('De oppervlakte van het vierkant is: ' + vierkant);
    } else if (vorm === 'Rechthoek') {
        const basis = parseFloat(await userInput.question('Wat is de basis: '));
        const hoogte = parseFloat(await userInput.question('Wat is de hoogte: '));
        const rechthoek = basis * hoogte;
        console.log('De oppervlakte van de rechthoek is: ' + rechthoek);
    } else if (vorm === 'Cirkel') {
        const straal = parseFloat(await userInput.question('Wat is de straal: '));
        const cirkel = Math.PI * straal * straal;
        console.log('De oppervlakte van de cirkel is: ' + cirkel);
    } else {
        console.log('Ongeldige vorm.');
    }

    userInput.close(); // Vergeet niet de interface te sluiten
}

oppervlakteVorm();
