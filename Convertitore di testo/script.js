let testoinserito = document.getElementById("testo");

let bottoneMaius = document.getElementById("bottone-maiuscolo"); 
let bottoneMinus = document.getElementById("bottone-minuscolo"); 
let bottoneInvert = document.getElementById("bottone-inverti"); 
let bottoneIniziali = document.getElementById("bottone-iniziali"); 

let risultatoMaius = document.getElementById("risultato-maiuscolo");   
let risultatoMinus = document.getElementById("risultato-minuscolo");
let risultatoInvert = document.getElementById("risultato-inverti");
let risultatoIniziali = document.getElementById("risultato-iniziali");

bottoneMaius.addEventListener("click", function() {
    let testoMaiuscolo = testoinserito.value.toUpperCase();
    risultatoMaius.innerText = "Risultato: " + testoMaiuscolo;
});

bottoneMinus.addEventListener("click", function() {
    let testoMinuscolo = testoinserito.value.toLowerCase();
    risultatoMinus.innerText = "Risultato: " + testoMinuscolo;
});

