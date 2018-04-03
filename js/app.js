console.log('My game')

let time = 60;
let timer;
let wordCount = 0;
let points = 0;
// this keeps track of which we are on
let nextRound = 0;

const words = [
	// ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
 	['yellow', 'one', 'blue', 'green', 'black', 'two', 'three', 'apple', 'the', 'array', 'house', 'pizza', 'tea',  'monkey', 'ten', 'car', 'cup', 'plate', 'candy', 'banana', 'awesome', 'horse', 'strengths', 'a', 'cat', 'tiger',  'day', 'is', 'good', 'so', 'some', 'sound', 'still', 'such', 'take', 'tell', 'than', 'commit', 'bird'],
 	['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu'],
 	['worksheet', 'dinosaur', 'printing', 'incredible', 'thirteen', 'vocabulary', 'triangle', 'rhyming', 'examples', 'dictionary',  'something', 'intend', 'practice', 'pictures', 'poems', 'selections', 'elephant', 'giraffe', 'coffee', 'address', 'evident', 'accord', 'approach', 'establish', 'straight', 'apparent', 'passage'],
	['traintrack', 'continuing', 'outstanding', 'appointed', 'earnest', 'convention', 'territory', 'undertake', 'majority', 'attitude', 'manifest', 'resource', 'contempt', 'distinction', 'inclined', 'attribute', 'disposition', 'bestow', 'corruption', 'crerical'],
	['ascertain', 'perpetual', 'substancial', 'elaborate', 'conspicuous', 'proceeding', 'extravagant', 'venerate', 'suffrage', 'intrigue', 'dispatch', 'railroad', 'undertaking', 'predecessor', 'delicacy']
] 



const checkWord = () => {
	// increase wordCount
	if(wordCount < 10){
		wordCount++;
		console.log(wordCount);

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

const setTimer = () => {
	
  	timer = setInterval(() => {
  		console.log(timer+" is this");

		time--
		$('#time').text('Time: ' + time)
		console.log( time + ' timer is running');

		if(time === 0){

			// console.log('is this happening iddkkkk')
	 		
			clearInterval(timer);
			
			toggleModal();
		
			// Try to create a modal 
			// Your score was blah blah,
			// are you ready for round two
			// then click button yes
			// when click that button this starts

			// print message in html
			console.log("Time's up!")

			// if they got enough points, move to next round
		}

	}, 1000);
}

function toggleModal() {
	// how do I toggle a class in jquery
    $(".modal").toggleClass("show-modal");
}

function startRound() {
	if(nextRound !== 0) {
		toggleModal();
	}	
	setTimer();
	nextRound++;
	$('#rounds').text('Round: ' + nextRound)
	getWord();
	time = 60;

}


//click functions in jquery
// trigger.addEventListener("click", toggleModal);
$("#modal-button").on("click", startRound);

// closeButton.addEventListener("click", toggleModal);
$(".close-button").on("click", toggleModal);
// window.addEventListener("click", windowOnClick);

// check answer
$('#answer').on('click', (event) => {//this gets the input 
	event.preventDefault();//this prevents it 
	// console.log('response');

	const wordAnswer = $('#answerText').val();

	$('#answerText').text(wordAnswer);
	// console.log(wordAnswer);

	//if the word given is the same
	if($('#wordBox').text() === wordAnswer) {
		points++;
		// print points in html
		$('#score').text("Points: " + points)
		getWord();	
		checkWord();
		// clear out the input
		$('#answerText').val('')

	} else { // user typed word incorrectly
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

$('#name').on('click', (event) => {
	event.preventDefault();
	// $('#name').effect('explode');
	const changeName = $('input').val();
	$('#display').text(changeName);	
	startRound();
})












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

