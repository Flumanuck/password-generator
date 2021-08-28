// Assignment Code
var generateBtn = document.querySelector("#generate");
var letter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["-", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "+", "<", ">", ";", ":", "?", "/",]; 
var finalArray = []
var characterAmount;
var uppercaseConfirm;
var numberConfirm;
var lowercaseConfirm;
var specialCharConfirm;
var finalPass = []

function userInput (){
characterAmount = window.prompt("How many characters do you want your password to have?");
if  (!isNaN(characterAmount)) {
uppercaseConfirm = window.confirm("Do you want capital letters?");
lowercaseConfirm = window.confirm("Do you want lowercase letters?");
numberConfirm = window.confirm("Do you want numbers?");
specialCharConfirm = window.confirm("Do you want special characters? (eg: @,!,#,$)");
}
else{
  window.alert("Please type a valid number.");
  userInput();
}
}







function generatePassword(){
  userInput();  
  if(uppercaseConfirm){
    // loop over letter array and turn each character to uppercase, then push to final array
    letter.forEach(element => finalArray.push(element.toUpperCase()))
    };
  // if lowercase is wanted, push to finalArray
  if(lowercaseConfirm){
    letter.forEach(element => finalArray.push(element))
    };
  // if numbers are wanted, push to finalArray
  if(numberConfirm){
    numbers.forEach(element => finalArray.push(element))
    };
  // if special characters are wanted, push to finalArray  
  if(specialCharConfirm){
    specialCharacter.forEach(element => finalArray.push(element))
    };
  console.log(characterAmount)
  console.log(uppercaseConfirm)
  console.log(lowercaseConfirm)
  console.log(numberConfirm)
  console.log(specialCharConfirm)  
  console.log(finalArray)  
  
  for(var i = 0; i < characterAmount; i++) {
  finalPass.push(finalArray[Math.floor(Math.random() * finalArray.length)]);
  }
  return [finalPass.join('')]
  
} 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
