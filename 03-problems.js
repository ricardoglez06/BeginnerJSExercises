// PROBLEM 1
let total = 0;
for (let i=0; i<15; i++){
    let wages = prompt(`Enter the wage of the teacher #${i+1}`);
    total += parseInt(wages);
}

console.log(`The total to be paid is $${total}`);