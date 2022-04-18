//1-Write a JavaScript program to display the current day and time
let date = new Date();
let daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
let day = date.getDay();
let dayName = daysOfWeek[day];
let hour = date.getHours();
let min = date.getMinutes();
let second = date.getSeconds();
let prepend = (hour > 12 ? "PM" : "AM");
let realHour = (hour > 12 ? hour - 12 : hour);
if (hour == 12 && min == 0 && second == 0) {
    prepend = 'noon'
} else if (hour == 0 && min == 0 && second == 0) {
    prepend = 'Mid Night'
}
let todaysDate = `Today is : ${dayName}`;
let time = `${realHour} :${min} : ${second} :${prepend}`;
let dateAndTime = `${todaysDate} ${time}`;
console.log(dateAndTime);
//2. Write a JavaScript program to print the contents of the current window
let printCurrentWindow = () => {
    window.print();
}
printCurrentWindow();
//3. Write a JavaScript program to get the current date
let date = new Date();
let dd = date.getDate();
let mm = date.getMonth() + 1;
let yy = date.getFullYear();
let mm_dd_yyyy = `${mm} - ${dd} - ${yy}`;
let mmddyyyy = `${mm} / ${dd} / ${yy}`;
let dd_mm_yyyy = `${dd} - ${mm} - ${yy}`;
let ddmmyyy = `${dd} / ${mm} / ${yy}`;
console.log(mm_dd_yyyy);
console.log(mmddyyyy);
console.log(dd_mm_yyyy);
console.log(ddmmyyy);
//4.Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front
let text = "w3schools";
setInterval(() => {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    console.log(text);
}, 1000);
//5. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar
let isLeapYear = (inputYear) => {
    return (inputYear % 100 == 0 ? inputYear % 400 == 0 : inputYear % 4 == 0);
}
console.log(isLeapYear(2016));
console.log(isLeapYear(1800));
//6.Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
let years = [];
for (let year = 2015; year < 2050; year++) {
    let date = new Date(year, 0, 1);
    if (date.getDay() == 0) {
        years.push(year);
    }
}
console.log(years);
//7.Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"
let guessNumber = prompt('please guess one number!');
let checkGuessingNumber = (inputNumber) => {
    let randomNumber = Math.floor(Math.random() * 10);
    let result = (randomNumber == inputNumber ? "your guess is true!" : "your guess is false!");
    return result;
}
console.log(checkGuessingNumber(10));