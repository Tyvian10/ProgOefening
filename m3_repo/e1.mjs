import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

let som = 0;
let getal = 0;
while(getal <= 19){
    som += getal;
    getal ++;
    console.log(getal)
}

