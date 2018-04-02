console.log('My game')

let time = 60;
let timer;
let wordCount = 0;
let points = 0;

// this keeps track of which we are on
let nextRound = 1;

// let round = 1;
$('#name').on('click', (event) => {
	event.preventDefault();
	// $('#name').effect('explode');
	console.log('Hello')
	const changeName = $('input').val();
	//$('#display').empty();
	$('#display').text(changeName);	
	setTimer();
})
const words = [
 	['yellow', 'one', 'blue', 'green', 'black', 'two', 'three', 'apple', 'the', 'array', 'house', 'pizza', 'tea',  'monkey', 'ten', 'car', 'cup', 'plate',
 	'candy', 'banana', 'awesome', 'horse', 'strengths', 'a', 'cat', 'tiger',  'day', 'is', 'good', 'so', 'some', 'sound', 'still', 'such', 'take', 'tell', 'than', 'commit', 'bird'],
 	['worksheet', 'dinosaur', 'printing', 'incredible', 'thirteen', 'vocabulary', 'triangle', 'rhyming', 'examples', 'dictionary',  'something', 'intend', 'practice', 'pictures', 'poems', 'selections', 'elephant', 'giraffe', 'coffee', 'address', 'evident', 'accord', 'approach', 'establish', 'straight', 'apparent', 'passage'],
	['traintrack', 'continuing', 'outstanding', 'appointed', 'earnest', 'convention', 'territory', 'undertake', 'majority', 'attitude', 'manifest', 'resource', 'contempt', 'distinction', 'inclined', 'attribute', 'disposition', 'bestow', 'corruption', 'crerical'],
	['ascertain', 'perpetual', 'substancial', 'elaborate', 'conspicuous', 'proceeding', 'extravagant', 'venerate', 'suffrage', 'intrigue', 'dispatch', 'railroad', 'undertaking', 'predecessor', 'delicacy']
] 


console.log(words)
const checkWord = () => {

	if(wordCount < 10){
		wordCount++;
		console.log(wordCount);
	} else {
		console.log('hitting')
		wordCount = 0;
		nextRound++;
		setTimer();
		console.log(nextRound, ' this is nextRound')
		$('#rounds').text('Round: ' + nextRound)
	}
}




// let word = roundOneWords[Math.floor(Math.random() * roundOneWords.length)];
const getWord = () => {

	// get the correct array for this round
	const roundArray = words[nextRound];
	console.log(roundArray)

	// get random word from that array
 	const word = roundArray[Math.floor(Math.random() * roundArray.length)] 	
 	console.log(word)


  	let box = $('#wordBox')
  	box.text(word);
  	console.log(word)
	///this will change the input value to null
	// slice whatever word you got out of the roundOneWords
	
		// tell user they won (html/jq)

  	
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
		checkWord();
		// we can clear out the input
		$('#answerText').val('')
	} else {
		points--;
		$('#score').text("Points: " + points)
		// print points in html
		console.log(points)
		alert("keep trying")
		getWord();
		checkWord();
		$('#answerText').val('')
	}
})

const setTimer = () => {
	
  	timer = setInterval(() => {


	time--
	$('#time').text('Time: ' + time)
	console.log( time + ' timer is running');

	if(time === 0){
		console.log('is this happening iddkkkk')
 		
		clearInterval(timer)

		// Try to create a modal 
		// Your score was blah blah,
		// are you ready for round two
		// then click button yes

		// when click that button this starts
		wordCount = 0;
		nextRound++;
		time = 10;
		console.log(nextRound, ' this is nextRound')
		$('#rounds').text('Round: ' + nextRound)


		setTimer();

		// print message in html
		console.log("Time's up!")

		// if they got enough points, move to next round
		// setTimer()
	}

    
  }, 1000);
}

 

// setTimer();

// .effect('explode')
	
	// $('#wordBox').empty();
// make counter to keep track of how many words so far

// each time you get aword 
	// if the counter is 10
		// next round
	//otherwise increment the counter
		// get the next word (what you already have)
///keep track of thw word
//point at

