
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

let userInput = readline.createInterface({ input, output });

// Prijzen en BTW-percentages
let WijnPrijs = 10;
let BierPrijs = 2;
let FruitsapPrijs = 3;

let WijnBTW = 21;
let BierBTW = 6;
let FruitsapBTW = 12;

// Functie om de totaalprijs met BTW te berekenen
function berekenTotaalBTW(geschenkmand) {
    let totaal = 0;
    
    for (let i = 0; i < geschenkmand.length; i++) {
        if (geschenkmand[i] === 'Wijn') {
            totaal += WijnPrijs * (1 + WijnBTW / 100);
        } else if (geschenkmand[i] === 'Bier') {
            totaal += BierPrijs * (1 + BierBTW / 100);
        } else if (geschenkmand[i] === 'Fruitsap') {
            totaal += FruitsapPrijs * (1 + FruitsapBTW / 100);
        }
    }
    
    return totaal.toFixed(2); // Rond het totaal af op 2 decimalen
}

// Functie om de geschenkmand te vullen
async function vulGeschenkmand(geschenkmand, maxCadeaus) {
    while (geschenkmand.length < maxCadeaus) {
        let keuze = await userInput.question("Kies een cadeau om toe te voegen aan de mand (Wijn, Bier, Fruitsap): ");
    
        switch (keuze) {
            case 'Wijn':
            case 'Bier':
            case 'Fruitsap':
                geschenkmand.push(keuze);
                console.log(`${keuze} is toegevoegd aan de geschenkmand.`);
                break;
            default:
                console.log("Ongeldige keuze. Kies alstublieft 'Wijn', 'Bier' of 'Fruitsap'.");
        }
    }
}

// Hoofdprogramma om de geschenkmand te vullen en het totaal te berekenen
async function startGeschenkmandProgramma() {
    let maxCadeaus;

    // Vraag om de grootte van de geschenkmand, minimaal 3 en maximaal 20
    do {
        maxCadeaus = await userInput.question("Hoeveel cadeaus wil je in de geschenkmand plaatsen (minimaal 3, maximaal 20)? ");
        if (maxCadeaus == "" || maxCadeaus < 3 || maxCadeaus > 20) {
            console.log("Ongeldige invoer. Kies een aantal tussen 3 en 20.");
        }
    } while (maxCadeaus == "" || maxCadeaus < 3 || maxCadeaus > 20);

    // Maak de geschenkmand en vul deze
    let geschenkmand = [];
    await vulGeschenkmand(geschenkmand, maxCadeaus);

    console.log("Je geschenkmand is gevuld met:", geschenkmand);

    // Bereken en toon het totaal
    let totaalPrijs = berekenTotaalBTW(geschenkmand);
    console.log("Het totaal van de geschenkmand is: €" + totaalPrijs);

    userInput.close(); // Sluit de readline interface
}

// Start het programma
startGeschenkmandProgramma();
