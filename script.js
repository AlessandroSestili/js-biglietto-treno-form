
//Aggiungiamo un EventListener in ascolto per il tasto SUBMIT
myForm.addEventListener("submit" , function(event){

    //myForm seleziona il mio form dall'HTML tramite il suo ID
    myForm = document.getElementById("myForm")

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

    if( (isNaN(nome)) && (!isNaN(km)) ) {

        console.log("Questo è il nome dell'utente: " + nome + ", mentre questi sono i km che deve percorrere: " + km + ". Questa è la sua età: " + eta)
    
    
        //Stampa il prezzo del biglietto
        var prezzoAlKm = 0.21;
        var prezzoBiglietto = (km * prezzoAlKm);
    
        document.getElementById("costobiglietto").innerHTML = prezzoBiglietto + "€"
    
        if(eta == "minorenne") {
            document.getElementById("costobiglietto").innerHTML = (prezzoBiglietto - (prezzoBiglietto * 0.20)).toFixed(2) + "€"
    
        } else if (eta == "maggiorenne") {
            document.getElementById("costobiglietto").innerHTML = prezzoBiglietto.toFixed(2) + "€"
    
        } else {
            document.getElementById("costobiglietto").innerHTML = (prezzoBiglietto - (prezzoBiglietto * 0.40)).toFixed(2) + "€"
    
        }
    
        //stampa il numero CP che varia da 90000 a 100000
        document.getElementById("codicecp").innerHTML = GeneraNumeroRandomCompresoTra(90000 , 100000)
    
        // stampo carrozza 
        document.getElementById("carrozza").innerHTML = GeneraNumeroRandomCompresoTra(1 , 100)
    
    
        //stampa lo sconto applicato 
        document.getElementById("offerta").innerHTML = "sconto " + eta 
    
        // stampo nome utente 
        document.getElementById("nomepasseggero").innerHTML = nome

    } else {

        alert("Non hai inserito i dati correttamente. Riprova.")

    }
}) 













function GeneraNumeroRandomCompresoTra (min , max) {

    var min;
    var max;

    var risultato = Math.floor(Math.random() * ((max - min + 1)) + min);

    return risultato
}




