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

// Write password to the #password input
function writePassword() {
  window.prompt("Please choose how long you would like your password! '8 to 128 Characters'");
  if (writePassword >= 8) {
    generatePassword
  }
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();


 // function generatePassword() {
 // var length = 8,
    //  charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    //  retVal = "";
 // for (var i = 0, n = charset.length; i < length; ++i) {
      //retVal += charset.charAt(Math.floor(Math.random() * n));
  //}
 // return retVal;
//}