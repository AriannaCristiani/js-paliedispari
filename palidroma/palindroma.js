//Chiedere all'utente di inserire una parola
//Capire se la parola scritta dall'utente è palindroma
//  SE la parola è palindroma 
//      -stampare true
//  ALTRIMENTI SE la parola non è palindroma
//      -stampare false


const userWord = prompt ('Scrivi una parola')
console.log(userWord)

function wordReverse(text) {
    let newWord = ''
    

	for (let i = 0; i < text.length; i++) {
		// console.log(i)
		const char = text.at(-i - 1)
		// console.log(i, char)
		newWord += char
		// console.log(newWord)
	}

    return newWord

	
}

const reversedText = wordReverse(userWord) 
console.log(reversedText) 




