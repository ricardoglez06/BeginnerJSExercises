// PROBLEM 1
// let total = 0;
// for (let i=0; i<15; i++){
//     let wages = prompt(`Enter the wage of the teacher #${i+1}`);
//     total += parseInt(wages);
// }

// console.log(`The total to be paid is $${total}`);


// PROBLEM 2
// let n = prompt("How many integers do you want to add");
// let summation = 0;

// for (let i=0; i<n; i++){
//     let integer;
//     integer = parseInt(prompt("Enter a integer"));
//     summation += integer;
// }

// console.log(`The result is ${summation}`);


// PROBLEM 3
// let total = 0;
// for (let i=0; i<5; i++){
//     let number = parseInt(prompt("Enter a number"));
//     let square = Math.pow(number,2);
//     total += square;
// }

// console.log(`The result is ${total}`);


// PROBLEM 4
// let mainNumber = 0;
// let secondaryNumber = 1;
// let aux;

// for (let i=0; i<50; i++){
//     console.log(`${numMain}, `);
//     aux = numMain + secondaryNumber;
//     secondaryNumber = numMain;
//     numMain = aux;
// }


// PROBLEM 5
// let n = parseInt(prompt("Enter the amount of numbers you want to compare to find the highest"));
// let highestNumber;
// let number;

// for (let i=0; i < n; i++){
//     number = parseInt(prompt("Enter a number"));
//     (i==0 || number > highestNumber) ? highestNumber = number : highestNumber;
// }
// console.log(`The highest number is ${highestNumber}`);

// PROBLEM 6
// let number = parseInt(prompt("Enter a number to know if it is pair or not"));
// (number%2 == 0) ? console.log("Pair") : console.log("Unpair");

// PROBLEM 7
// let rangeStart = parseInt(prompt("Enter the range start"));
// let rangeEnd = parseInt(prompt("Enter the range end"));

// for (rangeStart; rangeStart <= rangeEnd; rangeStart++){
//     if (rangeStart%2 == 0){
//         console.log(`${rangeStart}, `);
//     }
// }


// PROBLEM 8
// let pairs = 0;
// let averageOdds;

// do {
//     let number = parseInt(prompt("Enter a number"));
//     let odds = 0;
//     let counter = 1;

//     if (number%2 === 0) {
//         pairs += number;
//     } else {
//         odds += number;
//         counter++;
//     }
//     averageOdds = odds / counter;

//     decision = prompt("Do you want to enter another number? Enter 'Y' for Yes, or 'N' for No.")
// } while (decision === "Y")

// console.log(`The summatory of the pairs is ${pairs}`);
// console.log(`The average of the odds is ${averageOdds}`);


// PROBLEM 9
let number = parseInt(prompt("Enter a number (10-99) you want to separate its digits"));
let firstDigit = Math.floor(number/10);
let secondDigit = number%10;

console.log(`${firstDigit} , ${secondDigit}`);