// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const result = parseFloat(numberOne) + parseFloat(numberTwo); //or Number(numberOne)
console.log(result);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const result2 = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);
console.log(result2.toFixed(2));

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;


// Show in the console the avg. with 5 decimals

const array2 = [one, two, three];
function average(array) {
    var i = 0;
    var sum = 0;
    while(i < array.length) {
        sum += array[i++];
    }
    return sum/(array.length);
}
console.log(average(array2));

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

//console.log(letters[2]);
const findC = letters[letters.indexOf("c")];
console.log(findC);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

var i;
for(i = 0; i < fact.length - 1; i++) {
    if(fact.charAt(i) == "j"){
        const letter = fact.charAt(i);
        const uppercaseLetter = letter.toUpperCase();
        const newFact = fact.replace(letter, uppercaseLetter);
        console.log(newFact);
    }
}

// --------------------------------------