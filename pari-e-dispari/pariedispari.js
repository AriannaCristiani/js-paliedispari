//far sceglie all'utente tra le due opzioni 'pari' o 'dispari'
//fa inserire all'utente un numero da 1 a 5
//generare anche per il compute un numero random tra 1 e 5 tramite una funzione
//sommare i due risultati per verificare se pari o dispari tramite una funzione
//stampare il vincitore in base al risultato


const userChoice = prompt('scegli tra pari e dispari')
console.log('scelta utente:', userChoice)

const userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))
console.log('numero utente:', userNumber)

const pcNumber = getRandomIntInclusive (1 , 5)
console.log('numero computer:', pcNumber)



const somma = userNumber + pcNumber
console.log('somma:', somma)

let message= 'Hai perso, ritenta!'

if (isEven (somma) && userChoice.toLowerCase()==='pari'){
	message = 'Hai vinto!'
} else if (!isEven (somma) && userChoice.toLowerCase()==='dispari'){
	message = 'Hai vinto!'
}

console.log (message)


function isEven (num) {
	const resto = num % 2

	if (resto === 0){
		return true
	}
	return false
}



function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min);
	const maxFloored = Math.floor(max);
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}


