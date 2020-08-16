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
var generatePass = function() {
  // Input for length of password
  var passLength = window.prompt("Hello! Please type a length of at least '8' characters and no more than '128' characters");
  
  // Validation set to deter from too short or too long passwords
  while (passLength < 8 || passLength > 128) {
    window.alert("Please enter the accepted amount of characters! Try again.");
    return generatePass();
  }
  
  // Returning to the user how many characters they chose
  var lenghConfirm = window.confirm("You have chosen " + passLength + " characters for your password length. Is this correct?");
    if (lenghConfirm) {
      alert("Great! Before we continue, you must confirm at least one character type: 'UpperCase, LowerCase, Symbols, or Numbers. This is for your safety <3");
    }
    else {
      return generatePass();
    }

    // To clarify if user wants upperCase
    var upperCaseAccept = window.confirm("If you would like your password to include UpperCase letters > Click 'OK' to confirm. If not > Click 'Cancel'");
    //if (upperCaseAccept === ) {
      
    

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePass);

// Execute Function
generatePass();

//var password = generatePassword();

  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;