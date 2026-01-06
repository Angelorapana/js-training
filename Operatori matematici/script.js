let bottoneNumeroUno = document.getElementById("bottone-numero-uno");
let bottoneNumeroDue = document.getElementById("bottone-numero-due");


let bottoneSomma = document.getElementById("bottone-addizione");

bottoneSomma.addEventListener("click", function() {
    let somma = parseInt(bottoneNumeroUno.value) + parseInt(bottoneNumeroDue.value);
    alert("La somma è: " + somma);
});                                                                                             