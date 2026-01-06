let bottoneNumeroUno = document.getElementById("bottone-numero-uno"); 
let bottoneNumeroDue = document.getElementById("bottone-numero-due"); 

let bottoneSomma = document.getElementById("bottone-addizione"); 
let bottoneSottrazione = document.getElementById("bottone-sottrazione"); 
let bottoneDivisione = document.getElementById("bottone-divisione"); 
let bottoneMoltiplicazione = document.getElementById("bottone-moltiplicazione"); 
let risultatoAddizione = document.getElementById("risultato-addizione");
let risultatoSottrazione = document.getElementById("risultato-sottrazione");
let risultatoDivisione = document.getElementById("risultato-divisione");
let risultatoMoltiplicazione = document.getElementById("risultato-moltiplicazione");


bottoneSomma.addEventListener("click", function() { 
let somma = parseInt(bottoneNumeroUno.value) + parseInt(bottoneNumeroDue.value)
risultatoAddizione.textContent = somma; });

bottoneSottrazione.addEventListener("click", function() { 
let sottrazione = parseInt(bottoneNumeroUno.value) - parseInt(bottoneNumeroDue.value)
risultatoSottrazione.textContent = sottrazione; });

bottoneDivisione.addEventListener("click", function() { 
let divisione = parseInt(bottoneNumeroUno.value) / parseInt(bottoneNumeroDue.value)
risultatoDivisione.textContent = divisione; });  

bottoneMoltiplicazione.addEventListener("click", function() { 
let moltiplicazione = parseInt(bottoneNumeroUno.value) * parseInt(bottoneNumeroDue.value)
risultatoMoltiplicazione.textContent = moltiplicazione; });



