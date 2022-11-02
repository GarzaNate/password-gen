// Assignment Code
// Grabbing anything attatched to 'generate' class
var generateBtn = document.querySelector("#generate");
// Preventing browser default
generateBtn.addEventListener("click", function (event) {
  event.preventDefault()
});
// Declaring var to be used to generate password
var charOptions = {
  lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' , 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'],
  uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  unique: ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
}

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
    selection = charOptions.lowercase.concat(charOptions.uppercase, charOptions.numbers, charOptions.unique);
    // three criteria selection
  } else if (lower && upper && num) {
    selection = charOptions.lowercase.concat(charOptions.uppercase, charOptions.numbers);
  } else if (lower && upper && special) {
    selection = charOptions.lowercase.concat(charOptions.uppercase, charOptions.unique);
  } else if (upper && num && special) {
    selection = charOptions.uppercase.concat(charOptions.numbers, charOptions.unique);
    // two criteria selection 
  } else if (lower && upper) {
    selection = charOptions.lowercase.concat(charOptions.uppercase);
  } else if (lower && num) {
    selection = charOptions.lowercase.concat(charOptions.numbers);
  } else if (lower && special) {
    selection = charOptions.lowercase.concat(charOptions.unique);
  } else if (upper && num) {
    selection = charOptions.uppercase.concat(charOptions.numbers);
  } else if (upper && special) {
    selection = charOptions.uppercase.concat(charOptions.unique);
  } else if (num && special) {
    selection = charOptions.numbers.concat(charOptions.unique);
    // one criteria selection
  } else if (upper) {
    selection = charOptions.uppercase;
  } else if (num) {
    selection = charOptions.numbers;
  } else if (special) {
    selection = charOptions.unique;
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

