function sommaEseguiCallback(a, b, callback) {
    let risultato = a + b;
    console.log("risultato della somma:", risultato);
    //eseguo la callback con il risultato della somma
    callback(risultato);
}

function stampaRisultato(risultato) {
    console.log("la callback ha ricevuto il risultato;", risultato);
}

sommaEseguiCallback(2, 3, stampaRisultato);

//passaggio di parametri
function operazioneEseguiCallback(a, b, callback) {
    let risultato2 = a - b;

    callback(risultato2);
}

function stampaRisultatoSottrazione(risultato) {
    console.log("il risultato dell'operazione è:", risultato);
}

operazioneEseguiCallback(10, 7, stampaRisultatoSottrazione);
