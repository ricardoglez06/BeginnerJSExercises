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
let amount = prompt("What is the amount to withdraw?");
if (amount > 50){
    let bills = Math.floor(amount/50);
    let remainingMoney = amount % 50;
    document.write(`You´ll get ${bills} bills of $50 and the remaining money is $${remainingMoney}`) 
} else {
    alert("There are not enough funds");
}
