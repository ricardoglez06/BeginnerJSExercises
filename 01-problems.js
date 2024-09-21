//PROBLEM 1
// let randomNumber = Math.floor(Math.random()*100);
// console.log(randomNumber);
// tryNumber = prompt("Try to guess the random number");

// while (tryNumber != randomNumber){
//     if (tryNumber > randomNumber){
//         tryNumber = prompt("Try with a lower number");
//     } else {
//         tryNumber = prompt("Try with a higher number");
//     }
// }
// alert("Congratulations, you guessed the number correctly");
// document.write("The random number was ", randomNumber);


// PROBLEM 2
// let amount = prompt("What is the amount to withdraw?");
// if (amount > 50){
//     let bills = Math.floor(amount/50);
//     let remainingMoney = amount % 50;
//     document.write(`You´ll get ${bills} bills of $50 and the remaining money is $${remainingMoney}`) 
// } else {
//     alert("There are not enough funds");
// }


// PROBLEM 3
// let num = prompt("Which number do you want to know his multiplication table from 1 to 10");
// for (let i=1;i<=10;i++){
//     let result = i*num;
//     document.write(`${i}*${num} = ${result}<br>`);
// }


// PROBLEM 4
// let pswrd = prompt("Enter a password");
// if (pswrd.length < 10 ||pswrd.search(/[a-z]/) === -1 || pswrd.search(/[A-Z]/) === -1 || pswrd.search(/[0-9]/) === -1){
//     alert("The password must have at least 10 characters, a lowercase letter, a uppercase letter and a number");
// } else {
//     document.write(`The password was entered correctly <br>`);
//     document.write(`Your password is: ${pswrd}`); 
// }


// PROBLEM 5
// let n = prompt("How many numbers of the Fibonacci secuence do you want?");
// let i = 0;
// let numMain = 0;
// let numSecondary = 1;
// let aux;

// while (i < n){
//     document.write(` ${numMain},`);
//     aux = numMain + numSecondary;
//     numSecondary = numMain;
//     numMain = aux;
//     i++;
// }


// PROBLEM 6
// let n = prompt("Enter the number you want to calculate its factorial");
// document.write(` ${n} *`);
// let summation = n;

// for (let i = n-1; i > 0; i--){
//     summation *= i;
//     if (i <= 1){
//         document.write(` ${i}`);
//         break;
//     }
//     document.write(` ${i} *`);
// }
// document.write(` = ${summation}`);


//PROBLEM 7
function lenghtConversion(){
    let option = prompt("1. Cm to M\n 2. M to Km\n\n Choose an option");
        switch (option){
            case "1":
                let cm = prompt("Enter the cm");
                document.write(`${cm}cm = ${cm/100}m`);
                break;
            case "2":
                let m = prompt("Enter the m");
                document.write(`${m}m = ${m/1000}km`);
                break;
            default:
                alert("That is not an opton");
                break;
        }
}

function weightConversion(){
    let option = prompt("1. G to Kg\n 2. Kg to G\n\n Choose an option");
        switch (option){
            case "1":
                let g = prompt("Enter the g");
                document.write(`${g}g = ${g/1000}kg`);
                break;
            case "2":
                let kg = prompt("Enter the kg");
                document.write(`${kg}kg = ${kg*1000}g`);
                break;
            default:
                alert("That is not an option");
        }
}

function timeConversion(){
    option = prompt("1. Seconds to Minutes\n 2. Minutes to Hours\n\n Choose an option");
    let minutes;
        switch (option){
            case "1":
                let seconds = prompt("Enter the seconds");
                minutes = Math.floor(seconds/60);
                let secondsRemaining = seconds % 60;
                document.write(`${seconds} seconds = ${minutes} minutes and ${secondsRemaining} seconds`);
                break;
            case "2":
                minutes = prompt("Enter the minutes");
                let hours = Math.floor(minutes/60);
                let minutesRemaining = minutes % 60;
                document.write(`${minutes} minutes = ${hours} hours and ${minutesRemaining} minutes`);
                break;
            default:
                alert("That is not an option");
                break;
        }
}

let menu = prompt("MENU\n 1. Lenght\n 2. Weight\n 3. Time\n\n Choose an option");
switch (menu) {
    case "1":
        lenghtConversion();
        break;
    case "2":
        weightConversion();
        break;
    case "3":
        timeConversion();
        break;
    default:
        alert("That is not an option");
        break;
}