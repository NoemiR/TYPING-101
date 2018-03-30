console.log('My game')


$('#name').on('click', (event) => {
	console.log('Hello')
	const changeName = $('input').val();
	
	//$('#display').empty();
	$('#display').text(changeName);
	
	//this.name = changeName;
})
$('#wordBox').on('click', (event) => {
	console.log('respuesta')
	const wordAnswer = $('input').val();
	
	$('#wordBox').empty();
	$('#wordBox').text(wordAnswer);
	
	//this.name = changeName;
})
const arrayOfWords = ['yellow', 'one', 'three', 'apple', 'the',
 'array', 'house', 'pizza', 'tea', 'thirteen', 'monkey', 'banana', 'awesome', 'incredicle', 
 ' strengths', 'a', 'cat', 'tiger', 'elephant', 'dinosaur', 'day', 'is', 'good', 'so',
'some', 'something', 'sound', 'still', 'such', 'take', 'tell', 'than'];
console.log(arrayOfWords);

const word = arrayOfWords[Math.floor(Math.random() * arrayOfWords.length)];
console.log(word);
const box = $('#wordBox')
box.text(word)

// window.addEventListener("keydown", function(event) {

// }


const setTimer = () => {
	
  timer = setInterval(() => {
    time++
    console.log( time + ' timer is running')
    
    //   shadow.age++;
    
    // if(time === 10 || 12){
    // 	shadow.age++
    // 	printInfo();
    // }
    // if(time === 20){
    // 	clearInterval(timer)
    // }
    
  }, 1000);

};


// window.addEventListener("keydown", function(event) {
//   let str = "KeyboardEvent: key='" + event.key + "' | code='" +
//             event.code + "'";
//   let el = document.createElement("span");
//   el.innerHTML = str + "<br/>";
 
//   document.getElementById("output").appendChild(el);
// }, true);