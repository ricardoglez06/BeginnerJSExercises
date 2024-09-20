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
let pswrd = prompt("Enter a password");
if (pswrd.length < 10 ||pswrd.search(/[a-z]/) === -1 || pswrd.search(/[A-Z]/) === -1 || pswrd.search(/[0-9]/) === -1){
    alert("The password must have at least 10 characters, a lowercase letter, a uppercase letter and a number");
} else {
    document.write(`The password was entered correctly <br>`);
    document.write(`Your password is: ${pswrd}`); 
}