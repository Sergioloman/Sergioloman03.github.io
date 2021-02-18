// Assignment Code
// declare your variables at the top
var generateBtn = document.querySelector('#generate');
var length;
var uppers;
var lowers;
var numbers;
var specials;

// declare your functions
function passwordLength() {
  	// TODO Prompt user to select a number between 8-128. If they do not choose a number in that range, then call the function again. Make sure to store number length in variable and return them.
  length = prompt("")
  if () {
    alert("")
    passwordLength()
  }
  return length;
}

function passwordOptions() {
	// TODO Prompt user with series of confirms asking if they want specific characters. If they do not choose any, then call the function again. Make sure to store choices in variables and return them.
lowers = confirm("Do you want lowercase in your password?");
uppers = confirm("");
numbers = confirm("");
specials = confirm("");

if () {
 alert("")
 passwordOptions()
}

return options = {
  lowers,
  uppers,
  numbers,
  specials,
}

}

function generatePassword() {
  var length = passwordLength();
	var options = passwordOptions();
  var uppercaseLettersArray = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
];
  var lowercaseLettersArray = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];
  var numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialCharactersArray = [
	'!',
	'#',
	'$',
	'%',
	'&',
	'(',
	')',
	'*',
	'+',
	'-',
	'.',
	'/',
	':',
	';',
	'<',
	'=',
	'>',
	'?',
	'@',
];
  var passwordGenArray = [];

  	//TODO more logic here to determine what to include
  if (options.lowers) {

  }

  	//TODO more logic here to loop to determine random characters of password depending on length
  var password = "";

  for (var i = 0; i < length; i++) {
    //choose random letter of that passwordGenArray
  }

	return password;
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	// Selecting text area and writing password to textarea
	var passwordText = document.querySelector('#password');
	passwordText.value = password;
}

// TODO call functions and event listeners down here
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// // var options = {
// // 	uppers: true,
// // 	lowers: true,
// // 	numbers: false,
// // 	specials: false,
// // };

// // console.log(options.uppers);
// // var password = '';

// // for (var i = 0; i < 10; i++) {
// // 	password = password + i.toString();
// // 	console.log(password);
// // }