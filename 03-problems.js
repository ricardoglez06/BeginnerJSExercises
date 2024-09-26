// PROBLEM 1
// let total = 0;
// for (let i=0; i<15; i++){
//     let wages = prompt(`Enter the wage of the teacher #${i+1}`);
//     total += parseInt(wages);
// }

// console.log(`The total to be paid is $${total}`);


// PROBLEM 2
let n = prompt("How many integers do you want to add");
let summation = 0;

for (let i=0; i<n; i++){
    let integer;
    integer = parseInt(prompt("Enter a integer"));
    summation += integer;
}

console.log(`The result is ${summation}`);