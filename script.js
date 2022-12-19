// Assignment Code
// Grabbing anything attatched to 'generate' class
var generateBtn = document.querySelector("#generate");
// Preventing browser default
generateBtn.addEventListener("click", function (event) {
  event.preventDefault()
});
function generatePassword() {
  // prompt user for password length and character options
  var length = prompt("Please enter desired password length (8-128 characters):");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeLowercase = confirm("Include lowercase characters?");
  var includeSpecial = confirm("Include special characters?");
  var includeNumbers = confirm("Include numbers?");
  
  // create arrays for each character type
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', ':', ';', ',', '.', '<', '>', '/', '?'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // create empty array to store character options
  var characters = [];
  
  // add desired character types to characters array
  if (includeUppercase) {
  characters = characters.concat(uppercase);
  }
  if (includeLowercase) {
  characters = characters.concat(lowercase);
  }
  if (includeSpecial) {
  characters = characters.concat(special);
  }
  if (includeNumbers) {
  characters = characters.concat(numbers);
  }
  
  // create empty string to store password
  var password = "";
  
  // add random characters to password string until desired length is reached
  for (var i = 0; i < length; i++) {
  password += characters[Math.floor(Math.random() * characters.length)];
  }
  
  // return generated password
  return password;
  }
  
  // bind generatePassword function to button click
  document.querySelector("generate").addEventListener("click", function() {
  document.querySelector("password").innerHTML = generatePassword();
  });




  


// var writePassword = function () {
//   var randomPassword = [];
//   // For-loop to generate random length + characters
//   for (var i = 0; i < userChoice; i++) {
//     var userChoice = selection[Math.floor(Math.random() * selection.length)];
//     randomPassword.push(userChoice);
//     var newPassword = randomPassword.join('');
//   };
//   return newPassword;
// }

// function generatePassword() {
//   var newPassword = writePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = newPassword;
// }



// // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);

