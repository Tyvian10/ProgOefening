import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({input, output});

function convertTemperature(temperature, isCelcius) {
    let convertedTemp;
    
    if (isCelcius === true) {
     
        convertedTemp = (temperature * 1.8)+32;
    } else if (isCelsius === false)  {
        
        convertedTemp = (temperature / 1.8) - 32;
    }
    
    return convertedTemp;
}

async function main() {
   
    const tempInput = await userInput.question('Voer een temperatuur in: ');
    const temperature = parseFloat(tempInput); // Converteer de invoer naar een nummer

   
    const unitInput = await userInput.question('Is de temperatuur in Celsius? (typ "ja" of "nee"): ');
    const isCelcius = unitInput.toLowerCase() === 'ja'; // Controleer of de invoer 'ja' is

    const result = convertTemperature(temperature, isCelcius);

   
    console.log(`De omgezette temperatuur is: ${result}`);

    userInput.close();
}


main();