console.log('My game')


$('#name').on('click', (event) => {
	console.log('Hello')
	const changeName = $('input').val();
	
	//$('#display').empty();
	$('#display').text(changeName);
	
	//this.name = changeName;
})
const arrayOfWords = ['yellow', 'one', 'three', 'apple', 'the',
 'array', 'house',
 'pizza', 'tea', 
 'thirteen', 'monkey', 'banana', 'awesome', 'incredicle', 
 ' strengths', 'a', 'cat', 'tiger', 'elephant', 'dinosaur', 'day', 'is', 'good'];
console.log(arrayOfWords);

const word = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];