// Assignment Code
// Grabbing anything attatched to 'generate' class
var generateBtn = document.querySelector("#generate");
// Preventing browser default
generateBtn.addEventListener("click", function(event) {
  event.preventDefault()
});
// Declaring var to be used to generate password
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()abcdefghijklmnopqrstuvwxyz';
var passwordLength = 12;
var password = "";

// Write password to the #password input
function writePassword() {
  var userChoice = window.prompt("Enter a number 1-12:")
  if (!userChoice) {
    return;
  }
  // For-loop to generate random length + characters
  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }

  //var textInput = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
