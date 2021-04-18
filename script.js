//myForm seleziona il mio form dall'HTML tramite il suo ID
var myForm = document.getElementById("myForm")

//Aggiungiamo un EventListener in ascolto per il tasto SUBMIT
myForm.addEventListener("submit" , function(event){

    //Preveniamo la caratteristica di default del SUBMIT che normalmente ricaricherebbe la pagina 
    event.preventDefault();

    //recupero l'elemento al quale ho associato l'evento submit 
    var form = event.currentTarget;
    // recupero tutti gli elementi del form
    var formElements = form.elements;

    //recupero le value degli elementi del form
    var nome = formElements.nome.value;
    var km = formElements.km.value;
    var eta = formElements.eta.value;

    console.log("Questo è il nome dell'utente: " + nome + ", mentre questi sono i km che deve percorrere: " + km + ". Questa è la sua età: " + eta)


    document.getElementById("nomepasseggero").innerHTML = nome;
    // document.getElementById("offertapasseggero").innerHTML = 
    document.getElementById("carrozzapasseggero").innerHTML = "7"
    document.getElementById("codicecp").innerHTML = Math.random().toFixed(2)
    document.getElementById("")


}) 


function calcolaPrezzoBiglietto(kmDaPercorrere) {

    var prezzoAlKm = 0.21;
    var prezzoBiglietto = (kmDaPercorrere * prezzoAlKm);

    if (eta === "minorenne") {
        prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 0.20) ).toFixed(2) 
    } 
    
    if (eta === "over65") {
        prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 0.40) ).toFixed(2) 
    }

    if (eta === "maggiorenne") {
        prezzoBiglietto = (prezzoBiglietto - (prezzoBiglietto * 1) ).toFixed(2) 
    }

}


