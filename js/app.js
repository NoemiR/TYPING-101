console.log('My game')

let time = 60;
let timer;
let wordCount = 0;
let points = 0;
let nextRound = 0;
let correctWord = 0;
let wrongAnswer = 0;
let text = $("#strike")
text.css("color: red", "font-size: 45px");



const words = [    
//  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
// 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
['red', 'is', 'this', 'and', 'cold', 'total', 'food', 'blue', 'so', 'green',
'car', 'black', 'purple', 'pink', 'orange', 'gray', 'white', 'brown', 'aqua',
'pig', 'tea', 'bed', 'giant', 'small'],     
['yellow', 'one', 'blue', 'green',
'black', 'two', 'three', 'apple', 'the', 'array', 'house', 'pizza', 'tea',
'monkey', 'ten', 'car', 'cup', 'plate', 'candy', 'banana', 'awesome', 'horse',
'strengths', 'carrot', 'cat', 'tiger',  'day', 'string', 'good', 'soap',
'some', 'sound', 'still', 'such', 'take', 'tell', 'than', 'commit', 'bird'],
['rainbow', 'raining', 'thunder', 'equal', 'telephone', 'resume', 'computer',
'option', 'price', 'premium'],	
['worksheet', 'dinosaur', 'printing', 'incredible', 'thirteen',
'vocabulary', 'triangle', 'rhyming', 'examples', 'dictionary',  'something',
'intend', 'practice', 'pictures', 'poems', 'selections', 'elephant',
'giraffe', 'coffee', 'address', 'evident', 'accord', 'approach', 'establish',
'straight', 'apparent', 'passage'],     ['traintrack', 'continuing',
'outstanding', 'appointed', 'earnest', 'convention', 'territory', 'undertake',
'majority', 'attitude', 'manifest', 'resource', 'contempt', 'distinction',
'inclined', 'attribute', 'disposition', 'bestow', 'corruption', 'crerical'],
['ascertain', 'perpetual', 'substancial', 'elaborate', 'conspicuous',
'proceeding', 'extravagant', 'venerate', 'suffrage', 'intrigue', 'dispatch',
'railroad', 'undertaking', 'predecessor', 'delicacy'],     ['Alfa', 'Bravo',
'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett',
'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo',
'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu'],
];



const countingWords = () => {
	// increase wordCount
	if(wordCount < 10){
		wordCount++;
		

	} else { // we've done 10 words -- reset wordCount to 0 and go to next round
		console.log("resetting word count")
		wordCount = 0;
		clearInterval(timer);
		toggleModal();		
	}
}

const getWord = () => {

	// get the correct array for this round
	const roundArray = words[nextRound-1];

	// get random word from that array
 	const word = roundArray[Math.floor(Math.random() * roundArray.length)];

  	let box = $('#wordBox')
  	box.text(word);
	
	// tell user they won (html/jq)  	
}
const correctGuess = () => {

	if(correctWord === 10){
		clearInterval(timer);
		toggleModal();
		
	}
	else if(correctWord === 7){
		gameOver();
	} else {
		console.log(correctWord);
	}

}


function startRound() {
	// on round 1 there is no modal to close
	if(nextRound !== 0) {
		toggleModal();
	}	
	// $('audio#pop2')[0].play()
	nextRound++;console.log("nextRound is now "+ nextRound)
	setTimer();
	$('#rounds').text('Round: ' + nextRound)
	getWord();
	time = 60;
	correctWord = 0;

}
function gameOver() {
	if(wrongAnswer === 3){
		clearInterval(timer);
		$('#wordBox').text("")
		$('#answerText').hide()
		$('#answer').hide()
		$('#title').hide()

		$('#container').text('Game Over!').css({
			"height": "600px",
			"font-size": "200px",
			"text-align": "center",
			"background-color": "rgba(0, 0, 0, 0.9)"
		});
		$('audio#pop2')[0].pause()
		$('audio#pop')[0].play()
	}

}

const setTimer = () => {
	
  	timer = setInterval(() => {
  		console.log(timer+" is this");

		time--
		$('#time').text('Time: ' + time)
		console.log( time + ' timer is running');

		if(time === 0){

			clearInterval(timer);
			
			toggleModal();
			// if they got enough points, move to next round
		}

	}, 1000);
}

function toggleModal() {
	// how do I toggle a class in jquery
    $(".modal").toggleClass("show-modal");
}
$("#modal-button").on("click", (event) => {
	event.preventDefault()
	startRound();
})




$(".close-button").on("click", toggleModal);
// check answer
$('#answer').on('click', (event) => {//this gets the input 
	event.preventDefault();//this prevents it 

	const wordAnswer = $('#answerText').val();
	console.log(wordAnswer);
	
	$('#answerText').text(wordAnswer);

	//if the word given is the same
	if($('#wordBox').text() === wordAnswer) {
		points++;
		correctWord++;
		console.log(correctWord);
		// print points in html
		$('#score').text("Points: " + points)
		getWord();
		correctGuess();	
		// clear out the input
		$('#answerText').val('')

	} else { // user typed word incorrectly
		points--;
		wrongAnswer++;
		text.append("x")
		gameOver();
		
		
		$('#score').text("Points: " + points)
		// print points in html
		
		$('#answerText').val('')
	}
})

$('#name').on('click', (event) => {
	event.preventDefault();
	// $('#name').effect('explode');
	const changeName = $('input').val();
	$('#display').text(changeName);	
	$('#playername').val('')
	$('audio#pop2')[0].play()
	startRound();
})


			