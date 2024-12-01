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

//promise con finally
function myFunction() {
    return new Promise((resolve, reject) => {
        const success = true;
        setTimeout(() => {
            if(success) {
                resolve("promise risolta con successo!");
            }else {
                reject("errore nella promise");
            }
        }, 1000);
    })
    .finally(() => {
        console.log("azione eseguita nel blocco finally");
    });
}

myFunction()
.then(result => {
    console.log(result);
})
.catch(error => {
    console.log(error);
});

//cayena di primise semplice
function mynewFunction() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 1000);
    });
}

mynewFunction()
.then(result => {
    console.log("numero iniziale:", result);
    return result * 2;
})
.then(result => {
    console.log("numero dopo la moltiplicazione:", result);
    return result + 3;
})
.then(finalresult => {
    console.log("numero finale:", finalresult);
});
// promesse con condizioni 
function verificaPariODispari(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(numero);
        }, 1000);
    });
}

verificaPariODispari(5)
.then((numero) => {
    if (numero % 2 === 0) {
        console.log(`${numero} è pari`);
        return numero * 2;
    }else {
        console.log(`${numero} è dispari`);
        return numero - 3;
    }
})
.then((risultato5) => {
    console.log(`il risultato manipolato è: ${risultato5}`);
})
.catch((errore) => {
    console.error(`si è verificato un errore: ${errore}`);
})
//catena di promise con gestione di errori
function promiseCasuale() {
    return new Promise((resolve, reject) => {
        const valoreCasuale = Math.random();
        if (valoreCasuale > 0.5) {
            resolve("la promise è stata risolta con successo!");
        }else {
            reject("la promessa è stata rifiutata");
        }
    });
}
promiseCasuale()
.then((risultato6) => {
    console.log(risultato6);
    return "manipolazione successiva del risultato:" + risultato6;
})
.then((manipolazione) => {
    console.log(manipolazione);
})
.catch((errore) => {
    console.error("errore:", errore);
});
//promise rifiutata
function esempioPromiseRifiutata() {
    return new Promise ((_, reject) => {
        reject("si è verificato un errore");
    });
}
esempioPromiseRifiutata()
.catch((errore) => {
    console.log("errore", errore);
});
//gestire la promise con then e catch
function gestisciPromise(successo) {
    return new Promise((resolve, reject) => {
        if (successo) {
            resolve("operazione riuscita");
        }else {
            reject("si è verificato un errore");
        }
    });
}

gestisciPromise(true)
.then((messaggio) => {
    console.log("successo:", messaggio);
})
.catch((errore) => {
    console.log("errore", errore);
});

gestisciPromise(false)
.then((messaggio) => {
    console.log("successo", messaggio);
})
.catch((error) => {
    console.log("error", error);
})


