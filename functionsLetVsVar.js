// VAR CAN ACCESS TO ALL VARIABLE NAMES
// IN THE SCOPE WHERE IT IS

// VAR EXAMPLE -> perche' non devi usarlo!

function start() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
    console.log(i); // qui verra' stampato 6, cioe' il numero del ciclo che
                    // non entrando nella condition non verra' stampato
                    // quindi fuori il valore della i = 6
                    // perche nel for i deve essere <= 5 !
}

start();

console.log('\n=================================\n\n');

// CON IL LET QUESTO NON ACCADE
function stop() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    console.log(i); // qui avremo un errore in console perche'
                    // con let non possiamo accedere a quella variabile
                    // dichiarata in quello scope
}

stop();

// UN'ALTRA COSA IMPORTANTE CHE MENZIONA MOSH
// E' CHE IL VAR, SE VAI NELLA CONSOLE E SCRIVI window.color
// CHE E' UNA VAR GLOBAL VARIABLE
// POTRA' ESSERE ACCESSIBILE DA LI' E VEDERNE IL CONTENUTO
// CON IL LET NON PUOI FARLO!

// * IMPORTANT *
// LE FUNZIONI GLOBALI DEVONO ESSERE PROTETTE
// PERCHE' ANCHE LORO CON window.stop
// FARA' VEDERE TUTTO IL SUO CONTENUTO
// QUINDI DEVI USARE L'INCAPSUALMENTO!!!

var color = 'red';
let hello = 'ciao';