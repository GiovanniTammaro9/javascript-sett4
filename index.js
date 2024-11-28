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
