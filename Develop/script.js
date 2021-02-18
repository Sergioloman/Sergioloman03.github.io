// Assignment code here

// Enunciating variables
var uppersChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowersChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbersChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialsChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@'];
var length;
var generateBtn = document.querySelector("#generate");

// Declaring Functions based on prompts
//(if user selects x value then it 'returns' y value)

function passwordLength() {
  length = parseInt(prompt("How many characters do you want?"))
  if (length < 8 || length > 128 || isNaN(length)) {
    alert("Please enter a number in between 8 and 128")
    passwordLength()
  }
  return length;
  
}

function passwordOptions() {
  uppers = confirm("Do you want to use upper case in your password?");
  lowers = confirm("Do you want to use lower case in your password?");
  numbers = confirm("Do yo want to use numbers in your password?");
  specials = confirm("Do you want to use special characters in your password?")
  if (uppers === false && lowers === false && specials === false && numbers === false) {
    alert("You must select at least one character type")
    passwordOptions()
  }

  return options = {
    lowers,
    uppers,
    numbers,
    specials,
  }
  

}

//making our characters random
function randomChar(array){
  var randomindex = Math.floor(Math.random()*array.length); 
  var randomelement = array[randomindex];
  return randomelement;
}
function generatePassword() {
  var length = passwordLength();
  var options = passwordOptions();
  var result = [];
  var possiblechars = [];
  console.log(length);
  console.log(options);
  console.log(possiblechars);
  console.log(result);
  
  //here we use some logic to define the options
  //posible chars for lowers, uppers, numbers, specials:
  //we are using the .concat property so we can see them as a single array
  if (options.lowers) {
    possiblechars=possiblechars.concat(lowersChar);
  console.log(possiblechars);
  }
  if (options.uppers) {
    possiblechars=possiblechars.concat(uppersChar);
    console.log(possiblechars);
  }
  if (options.numbers) {
    possiblechars=possiblechars.concat(numbersChar);
    console.log(possiblechars);
  }
  if (options.specials) {
    possiblechars=possiblechars.concat(specialsChar);
    console.log(possiblechars);
  }

// here we figure out the random selection of options
  for (var i = 0; i < length; i++) {
    var possiblechar= randomChar(possiblechars);
    console.log(possiblechar);
    result.push(possiblechar);
  }
  console.log(result);
  return result.join("");

}


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
