// Assignment Code
// Grabbing anything attatched to 'generate' class
var generateBtn = document.querySelector("#generate");
// Preventing browser default
generateBtn.addEventListener("click", function (event) {
  event.preventDefault()
});
// Declaring var to be used to generate password
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' , 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var unique = ['!', '@', '#', '$', '%', '^', '&', '*', '()'];

// Write password to the #password input

function userPrompts() {
  length = window.prompt("Please enter a number 8-128");

    if (!length) {
      alert("Please enter a number to move on");
      return;
    } else if (length < 8 || length > 128){
      alert("Must be between 8-128 characters.")
    };

  lower = confirm("Would you like to use lowercase letters?");
  upper = confirm("Would you like to use uppercase letters?");
  num = confirm("Would you like to use numbers?");
  special = confirm("Would you like to use any special characters?")

}

var writePassword = function () {
  userPrompts();

  if (lower && upper && num && special) {
    selection = charSetSelection.lowercase.concat(charSetSelection.uppercase, charSetSelection.numbers, charSetSelection.unique);
    // three criteria selection
  } else if (lower && upper && num) {
    selection = charSetSelection.lowercase.concat(charSetSelection.uppercase, charSetSelection.numbers);
  } else if (lower && upper && special) {
    selection = charSetSelection.lowercase.concat(charSetSelection.uppercase, charSetSelection.unique);
  } else if (upper && num && special) {
    selection = charSetSelection.uppercase.concat(charSetSelection.numbers, charSetSelection.unique);
    // two criteria selection 
  } else if (lower && upper) {
    selection = charSetSelection.lowercase.concat(charSetSelection.uppercase);
  } else if (lower && num) {
    selection = charSetSelection.lowercase.concat(charSetSelection.numbers);
  } else if (lower && special) {
    selection = charSetSelection.lowercase.concat(charSetSelection.unique);
  } else if (upper && num) {
    selection = charSetSelection.uppercase.concat(charSetSelection.numbers);
  } else if (upper && special) {
    selection = charSetSelection.uppercase.concat(charSetSelection.unique);
  } else if (num && special) {
    selection = charSetSelection.numbers.concat(charSetSelection.unique);
    // one criteria selection
  } else if (upper) {
    selection = charSetSelection.uppercase;
  } else if (num) {
    selection = charSetSelection.numbers;
  } else if (special) {
    selection = charSetSelection.unique;
  };

  randomPassword = [];
  // For-loop to generate random length + characters
  for (var i = 0; i < userChoice; i++) {
    var userChoice = selection[Math.floor(Math.random() * selection.length)];
    randomPassword.push(userChoice);
    newPassword = randomPassword.join('');
  };
  return;
}

  function generatePassword() {
    var newPassword = writePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  }



// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

