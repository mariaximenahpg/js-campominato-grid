// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const boardContainer = document.querySelector(".board");
const gameStart = document.querySelector(".btn-play");
gameStart.addEventListener('click', function () {
    const mode = document.getElementById("difficolta").value;
    if(mode === "1"){
    boardContainer.innerHTML="";
for(let i = 1; i<=100; i ++){
    const boardSquare = document.createElement("div");
    boardSquare.innerHTML = i;
    boardSquare.classList.add("easy_board");
    boardSquare.addEventListener('click', function(){
        console.log(this.innerHTML);
        boardSquare.classList.add("active");        
    })
    boardContainer.append(boardSquare);
}
}
else if(mode === "2"){
    boardContainer.innerHTML="";
for(let i = 1; i<=81; i ++){
    const boardSquare = document.createElement("div");
    boardSquare.innerHTML = i;
    boardSquare.classList.add("medium");
    boardSquare.addEventListener('click', function(){
        console.log(this.innerHTML);
        boardSquare.classList.add("active");       
    })
    boardContainer.append(boardSquare);
}
}
else if(mode === "3"){
    boardContainer.innerHTML="";
for(let i = 1; i<=49; i ++){
    const boardSquare = document.createElement("div");
    boardSquare.innerHTML = i;
    boardSquare.classList.add("hard");
    boardSquare.addEventListener("click", function(){
        console.log(this.innerHTML);
        boardSquare.classList.add("active");       
    })
    boardContainer.append(boardSquare);
}
}
})