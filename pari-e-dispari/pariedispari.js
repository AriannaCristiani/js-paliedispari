//far sceglie all'utente tra le due opzioni 'pari' o 'dispari'
//fa inserire all'utente un numero da 1 a 5
//generare anche per il compute un numero random tra 1 e 5 tramite una funzione
//sommare i due risultati per verificare se pari o dispari tramite una funzione
//stampare il vincitore in base al risultato


const userChoice = prompt ('scegli tra pari e dispari')
console.log(userChoice)
const userNumber =prompt ('Scegli un numero da 1 a 5')
console.log(userNumber)


function randomPcNumber(min, max) {
 	return Math.floor(Math.random() * (max - min + 1) + min)
 }

console.log(randomPcNumber(1, 5))


