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
var symbolsAccept;
// User Accepted numbers
var numbersAccept;
// To restart in selection
var inputReset;

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
  var lenghConfirm = window.confirm("You have chosen " + passLength + " characters for your password length. Is this OK? > Click 'Cancel' to revise");
    if (lenghConfirm) {
      alert("Great! Before we continue, you must confirm at least one character type: 'UpperCase, LowerCase, Symbols, or Numbers. This is for your safety <3");
    }
    else {
      return generatePass();
    }

    // To clarify if user wants upperCase
    var upperCaseAccept = window.confirm("If you would like your password to include 'Upper-Case' letters > Click 'OK' to confirm. If not > Click 'Cancel'");
    if (upperCaseAccept) {
      alert("You've given the okay to use 'Upper-Case' letters.");
    }
    else {
      alert("You've chosen to not use 'Upper-Case' letters.");
    }

    // To clarify if user wants lowercase
    var lowerCaseAccept = window.confirm("If you would like your password to include 'Lower-case' letters > Click 'OK' to confirm. If not > Click 'Cancel'");
    if (lowerCaseAccept) {
      alert("You've given the okay to use 'Lower-Case' letters.");
    }
    else {
      alert("You've chosen to not use 'Lower-Case' letters.");
    }

    // To clarify if user wants numbers
    var numbersAccept = window.confirm("If you would like your password to include 'Numbers' > Click 'OK' to confirm. If not > Click 'Cancel'");
      if (numbersAccept) {
        alert("You've given the okay to use 'Numbers'.");
      }
      else {
        alert("You've chosen not to use 'Numbers'.");
      }

    // To clarify if user wants symbols
    var symbolsAccept = window.confirm("If you would like your password to include 'Symbols' > Click 'OK' to confirm. If not > Click 'Cancel'");
    if (symbolsAccept) {
      alert("You've given the okay to use 'Symbols'.");
    }
    else {
      alert("You've chosen not to use 'Symbols'.");
    }

    // To clarify if user wants to reset selections
    var inputReset = window.confirm("Would you like to restart with your selections? > Click 'OK' to do so. > Click 'Cancel' to continue.");
      if (inputReset) {
      return generatePass();
    }

    // To prevent from 0 selections being confirmed
    while (upperCaseAccept === false && lowerCaseAccept === false && numbersAccept === false && symbolsAccept === false) {
      alert("Please select atleast one character input. Thank you!")
      return generatePass();
    }

    // Variable for all selected inputs
    var userChosenSelections = []

    // Simplified way to add each confirmed element into a single area
    if (upperCaseAccept) {
      userChosenSelections = userChosenSelections.concat(upperCase);
    }

    if (lowerCaseAccept) {
      userChosenSelections = userChosenSelections.concat(lowerCase);
    }

    if (numbersAccept) {
      userChosenSelections = userChosenSelections.concat(numbers);
    }

    if (symbolsAccept) {
      userChosenSelections = userChosenSelections.concat(symbols);
    }

    // To log the selected inputs
    console.log(userChosenSelections);

    var randomizedPass = "";
    // Using however many characters the user wanted their password to be
    for (var i = 0; i < passLength; i++) {
      // Array brackets to match and perform with the simplified structure
      randomizedPass = randomizedPass + userChosenSelections[Math.floor(Math.random() * userChosenSelections.length)];
      console.log(randomizedPass);
    }
    return randomizedPass;
};

// Reference to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", generatePass);

function passwordtocard() {
// variable for all generated characters
var password = randomizedPass();
// Reference to #password element
var passwordText = document.querySelector("#password");

// PassWord Text Value
passwordText.value = password;

}

// Execute Function
generatePass();