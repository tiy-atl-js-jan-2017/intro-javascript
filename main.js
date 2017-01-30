console.log("Hello world");

// Declare and initialize a variable
var aGoodName = "Britton Stanhope Butler";

var weather = "raining";
if (weather === "raining") {
  console.log("order jjs");
} else if (weather === "snowing") {
  console.log("go the hell home");
} else {
  console.log("let's hit broad street");
}

// Function Definition
function add (x, y) {
  return x + y;
}

// Two examples of a Function Call
console.log(add(4, 5));
var z = add(13, 17) + 8 + 5;

// Don't do this very often.
// var crazy = add(add(5, 8), 42);



var resultsDiv = document.getElementById("results");
var textBox = document.getElementById("fizz-num");
var button = document.getElementById("submit-button");

function fizzBuzz () {
  var num = Number(textBox.value);
  for (var count = 1; count < num; count++) {
    if (count % 15 === 0) {
      console.log("FizzBuzz");
    } else if (count % 5 === 0) {
      console.log("Buzz");
    } else if (count % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(count);
    }
  }
}

button.addEventListener('click', fizzBuzz);
