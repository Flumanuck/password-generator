// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterAmount = window.prompt("How many characters do you want your password to have?");
var uppercaseConfirm = window.confirm("Do you want capital letters?")
var lowercaseConfirm = window.confirm("Do you want lowercase letters?")
var numberConfirm = window.confirm("Do you want numbers?")
var specialCharConfirm = window.confirm("Do you want special characters? (eg: @,!,#,$)")


console.log(characterAmount)
console.log(uppercaseConfirm)
console.log(lowercaseConfirm)
console.log(numberConfirm)
console.log(specialCharConfirm)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
