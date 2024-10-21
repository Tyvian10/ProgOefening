import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({input, output});


let basis = parseFloat(await userInput.question('Geef de lengte van de basis in: '));
let hoogte = parseFloat(await userInput.question('Geef de lengte van de hoogte in: '));


function oppervlakteRechthoek(basis, hoogte){
    let oppervlakte = basis * hoogte;
    console.log('De oppervlakte van een driehoek met een basis van '+ basis +' en een hoogte van '+ hoogte +' is '+ oppervlakte);

}


oppervlakteRechthoek(basis, hoogte);