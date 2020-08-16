// Assignment code here

// Presented with a series of prompts for password criteria

// Prompted for password criteria
// THEN I select which criteria to include in the password

// Prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Set Variables && Arrays section
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbols = ["!", "@", "#", "$", "%", "?", "&", "*", "<", ">", "+"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];

// User requested length
var passLength = "";
// User Accepted upperCased
var upperCaseAccept;
// User Accepted lowercased
var lowerCaseAccept;
// User Accepted symbols
var symbolsAcceptt;
// User Accepted numbers
var numbersAccept;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Execute Function
writePassword();