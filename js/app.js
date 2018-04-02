console.log('My game')

let time = 60;
let timer;
let wordCount = 0;
let points = 0;

// this keeps track of which we are on
let nextRound = 0;

// let round = 1;
$('#name').on('click', (event) => {
	event.preventDefault();
	// $('#name').effect('explode');
	console.log('Hello')
	const changeName = $('input').val();
	//$('#display').empty();
	$('#display').text(changeName);	
})
const words = [
 	['yellow', 'one', 'three', 'apple', 'the', 'array', 'house', 'pizza', 'tea', 'thirteen', 'monkey', 'banana', 'awesome', 'incredible', ' strengths', 'a', 'cat', 'tiger', 'elephant', 'dinosaur', 'day', 'is', 'good', 'so', 'some', 'something', 'sound', 'still', 'such', 'take', 'tell', 'than'],
 	['worksheet', 'printing', 'vocabulary', 'triangle', 'rhyming', 'examples', 'dictionary', 'pictures', 'poems', 'selections'],
	['round3test1', 'round3test2', 'round3test3'],
	['round4test1', 'round4test2', 'round4test3']
] 



// let word = roundOneWords[Math.floor(Math.random() * roundOneWords.length)];
const getWord = () => {

	// get the correct array for this round
	const roundArray = words[nextRound];

	// get random word from that array
 	const word = roundArray[Math.floor(Math.random() * roundArray.length)] 	


  	let box = $('#wordBox')
  	box.text(word);
  	console.log(word)
	///this will change the input value to null
	// slice whatever word you got out of the roundOneWords
	if(wordCount < 10){
		wordCount++;
		console.log(wordCount);
	} 
	if(points === 10){
		// tell user they won (html/jq)
		nextRound++
	} else {
		// start this round over
			// 
			//
	}
  	
}

getWord();

$('#answer').on('click', (event) => {//this gets the input 
	event.preventDefault();//this prevents it 
	console.log('response');

	const wordAnswer = $('#answerText').val();
	

	$('#answerText').text(wordAnswer);
	console.log(wordAnswer);

	if($('#wordBox').text() === wordAnswer) {//if the word given is the same
		points++;
		// print points in html
		$('#score').text("Points: " + points)
		console.log(points)
		console.log('match');//this will pop an alert if you get it right
		getWord();	
		// we can clear out the input
		$('#answerText').val('')
	} else {
		points--;
		$('#score').text("Points: " + points)
		// print points in html
		console.log(points)
		alert("keep trying")
		getWord();
		$('#answerText').val('')
	}
})

const setTimer = () => {
	
  	timer = setInterval(() => {


	time--
	$('#time').text('Time: ' + time)
	console.log( time + ' timer is running');

	if(time === 0){
		clearInterval(timer)

		// print message in html
		console.log("Time's up!")

		// if they got enough points, move to next round
		// setTimer()
	}

      // word++;
    // if(time === 10){
    // 	// word++
    // 	getWord()
    // }
    // if(time === 15){
    // 	clearInterval(timer)
    // }
    
  }, 1000);
}

 

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

