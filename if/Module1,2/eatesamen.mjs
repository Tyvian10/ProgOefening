import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let day = await userInput.question('Welke dag is het vandaag?')
let serie;
switch(day){
    case ("maandag"):
    day = "weekdag"
    console.log("Het is vandaag een " + day + "." );
    break;
    case ("Dinsdag"):
        day = "weekdag"
        console.log("Het is vandaag een " + dayÒ + ".");
        break;
    case ("Woensdag"):
        day = "weekdag"
        console.log("het is vandaag een " + day + ".");
        break;
    case ("Donderdag"):
        day = "weekdag"
        console.log("het is vandaag een " + day + ".");
        break;
    case ("vrijdag"):
        day = "weekdag"
        console.log("het is vandaag een " + day + ".");
    break;
    case ("Zaterdag"):
        day = "weekend"
        console.log("Het is vandaag een " + day + ".");
        break;

        default:
        console.log("wrong input")
    break;

}



    