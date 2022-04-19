//8. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference

let compareWith13 = (inputNum) => (inputNum > 13 ? (inputNum - 13) * 2 : 13 - inputNum);
console.log(compareWith13(25));
console.log(compareWith13(3));
//9.Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum
let compareTowNumber = (inputNumOne, inputNumTow) => (inputNumOne === inputNumTow ? inputNumOne * 6 : inputNumOne + inputNumTow);
console.log(compareTowNumber(6, 5));
console.log(compareTowNumber(3, 3));
//10. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19
let compareWith19 = (inputNum) => (inputNum > 19 ? (inputNum - 19) * 3 : 19 - inputNum);
console.log(compareWith19(30));
console.log(compareWith19(18));
//11. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50
let checkTowGivenNumber = (num1, num2) => ((num1 == 50) || (num2 == 50) || (num1 + num2 == 50) ? true : false);
console.log(checkTowGivenNumber(39, 50));
console.log(checkTowGivenNumber(20, 30));
console.log(checkTowGivenNumber(50, 23));
console.log(checkTowGivenNumber(39, 59));
//12.Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string
let addPyIfDidntHave = (inputString) => (((inputString == null) || (inputString == undefined) || (inputString.substring(0, 2) == 'py')) ? inputString : `py${inputString}`);
console.log(addPyIfDidntHave('python'));
console.log(addPyIfDidntHave('sanaz'));
//13.Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
let removeChar = (inputPosition, inputString) => inputString.substring(0, inputPosition) + inputString.substring(inputPosition + 1, inputString.length);
console.log(removeChar(3, 'sanaz'));
//14.Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1
let changePositionOfFirstAndLastChar = (inputString) => (inputString.length > 1 ? `${inputString[inputString.length - 1]}${inputString.substring(1, inputString.length - 1)}${inputString[0]}` : inputString);
console.log(changePositionOfFirstAndLastChar('sanaz'));
console.log(changePositionOfFirstAndLastChar('selena'));
//15.Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back
let addFirstCharAtFrontAndEnd = (inputString) => `${inputString[0]}${inputString}${inputString[0]}`
console.log(addFirstCharAtFrontAndEnd('sanaz'));
console.log(addFirstCharAtFrontAndEnd('dana'));