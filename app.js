$(document).ready(function() {

var newNumber = prompt("Please enter an integer between 1 and 100");


var TestNewNumber = function(){

	while (newNumber % 1 !== 0 || newNumber > 100 || newNumber < 1) {
	
	
	if (newNumber === ""){
		newNumber = prompt("Try again. Please enter an integer between 1 and 100");
	}
	else if (newNumber > 100 || newNumber < 1) {
		newNumber = prompt("That's not between 1 and 100! Please try again.");
	}
	else if (newNumber % 1 !== 0) {
		newNumber = prompt("Uh oh! That's not a whole number! Enter a NUMBER without fractions or decimals! Please try again.");
	
	}

}
};

TestNewNumber();

count = 1;


var FizzBuzz = function() {
	for (count = 1; count <= +newNumber; count++) {
	if (count % 3 === 0){
		if (count % 5 === 0){
			$("body").append("fizzbuzz, ");
		} else {
			$("body").append("fizz, ");
		}
	} else if (count % 5 === 0){
		$("body").append("buzz, ");
	} else {
		$("body").append(count + ", ");
	}
	}
};

FizzBuzz();


});