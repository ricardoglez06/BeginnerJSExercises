// PROBLEMA 1.1
let numeroAleatorio = Math.floor(Math.random()*100);
console.log(numeroAleatorio);
intentoNum = prompt("Intenta adivinar el numero aleatorio");

while (intentoNum != numeroAleatorio){
    intentoNum = prompt("Intenta con otro numero")
}
alert("Felicidades, adivinaste el numero aleatorio");