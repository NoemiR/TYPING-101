console.log('My game')

let time = 0;
let timer;
let wordCount = 0;
let nextRound = 1;

// let round = 1;
$('#name').on('click', (event) => {
	event.preventDefault();
	console.log('Hello')
	const changeName = $('input').val();
	//$('#display').empty();
	$('#display').text(changeName);	
})

const arrayOfWords = ['yellow', 'one', 'three', 'apple', 'the',
 'array', 'house', 'pizza', 'tea', 'thirteen', 'monkey', 'banana', 'awesome', 'incredible', 
 ' strengths', 'a', 'cat', 'tiger', 'elephant', 'dinosaur', 'day', 'is', 'good', 'so',
'some', 'something', 'sound', 'still', 'such', 'take', 'tell', 'than'];
console.log(arrayOfWords);

// let word = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
const getWord = () => {
	const word = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
	let box = $('#wordBox')
	box.text(word);
	console.log(word)
	///this will change the input value to null
	// slice whatever word you got out of the arrayOfWords
		

	if(wordCount < 10){
		wordCount++;
		console.log(wordCount);
	} else {
		nextRound++;
		wordCount = 0;
	}











};

getWord();

$('#answer').on('click', (event) => {//this gets the input 
	event.preventDefault();//this prevents it 
	console.log('response')
	const wordAnswer = $('#answerText').val();

	console.log(wordAnswer);
	$('#answerText').text(wordAnswer);
	console.log(wordAnswer);

	if($('#wordBox').text() === wordAnswer) {//if the word given is the same
		alert('match');//this will pop an alert if you get it right
		getWord();	
		// we can clear out the input
		$('#answerText').val('')
	}else {
		alert("you got it wrong")
		getWord();
	}
})

const setTimer = () => {
	
  timer = setInterval(() => {
    time++
    console.log( time + ' timer is running')
    
      // word++;
    
    if(time === 10){
    	// word++
    	getWord();
    }
    if(time === 15){
    	clearInterval(timer)
    }
    
  }, 1000);

};
setTimer();


	
	// $('#wordBox').empty();
// make counter to keep track of how many words so far

// each time you get aword 
	// if the counter is 10
		// next round
	//otherwise increment the counter
		// get the next word (what you already have)
///keep track of thw word
//point at

