console.log('My game')

let time = 0;
let timer;
$('#name').on('click', (event) => {
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



const printAnswer = () => {
	const word = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
	const box = $('#wordBox')
	box.text(word)	



	// slice whatever word you got out of the arrayOfWords
}

printAnswer();

$('#answer').on('click', (event) => {//this gets the input 
	event.preventDefault();//this prevents it 
	console.log('response')
	const wordAnswer = $('input').val();
	
	// $('#wordBox').empty();
	if($('#wordBox').text() === wordAnswer) {//if the word given is the same
	// as what the player types
		//do code for getting it right
		
		alert('match');//this will pop an alert if you get it right
		printAnswer();
		$('input').val('');///this will change the input value to null
	

	}else {
		alert('game over');
	}

	})

// window.addEventListener("keydown", function(event) {

// }


const setTimer = () => {
	
  timer = setInterval(() => {
    time++
    console.log( time + ' timer is running')
    
      // word++;
    
    if(time === 10){
    	// word++
    	printAnswer();
    }
    if(time === 15){
    	clearInterval(timer)
    }
    
  }, 1000);

};
setTimer();

const timing = $('#time')
timing.text(setTimer);
	
// window.addEventListener("keydown", function(event) {
//   let str = "KeyboardEvent: key='" + event.key + "' | code='" +
//             event.code + "'";
//   let el = document.createElement("span");
//   el.innerHTML = str + "<br/>";
 
//   document.getElementById("output").appendChild(el);
// }, true);