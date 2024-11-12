import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const userInput = readline.createInterface({ input, output });


function somVanDelers(getal) {

    let som = 0
    for (let i = 1;i < getal; i++) {

    if (getal % i === 0)
        som +=i     
    }
    return som;
}

function PerfecteGetallenTot100() {
    
    for (let getal = 1; getal<= 100; getal++) {
        if (somVanDelers(getal) === getal)  {
     console.log(getal + ' is een perfect getal.');
}
}
}

