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

//callback annidate 
function somma(a, b, callback) {
    let risultato3 = a + b;
    console.log("il risultato della somma è:", risultato3);
    callback(risultato3);
}
//seconda funzione che esegue una moltiplicazione sul risultato della somma
function moltiplicazione(a, callback) {
    let risultato3 = a * 2;
    console.log("il risultato della moltiplicazione è :", risultato3);
    callback(risultato3);
}

function stampaFinale(risultato3) {
    console.log("il risultato finale è", risultato3);
}

somma(5, 5, function(risultatosomma) {
    moltiplicazione(risultatosomma, stampaFinale);
});

//promise
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false; 
            if (success) {
                resolve("la promise è stata risolta dopo 2 secondi");
            }else {
                reject("si è verificato un errore durante l'esecuzione");
            }
            
        }, 2000);
    });
}
//chiamata alla funzione e gestione con then
myPromise().then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
});