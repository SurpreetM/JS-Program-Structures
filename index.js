
// Basic control flow is to read statements from top to bottom. 
let theNumber = Number(5);
console.log("Your number is the square root of " + theNumber * theNumber);

// Converting values to strings and booleans. 
let newNunber = String(5)
let booleanNumner = Boolean(5)
console.log(typeof(newNunber))
console.log(typeof(booleanNumner))


// Number.isNaN returns true if the argument given is NaN
let anotherNumber = Number("five")
console.log(Number.isNaN(anotherNumber))

// Conditional statement
if (!Number.isNaN(anotherNumber)) {
    console.log("Your number is the square root of" + anotherNumber * anotherNumber)
} else {
    console.log("Not given a number")
}

// while loops 
let number = 0; 
while (number <=12) {
	console.log(number);
	number = number + 1;
}

let result = 1 
let counter = 0
while (counter < 10) {
	result = result * 2;
	counter = counter + 1
}
console.log(result);

// while loops written as for loops

for (let number = 0; number <= 12; number = number + 1) {
	console.log(number)
}

let result1 = 1;
for (let number = 0; number < 10 ; number = number + 1) {
	result1 = result1 * 2; 
}

console.log(result1);


//  Using keyword break within a loop
for (let current = 20; ; current = current + 1) {
	if (current % 7 === 0) {
		console.log(current);
		break;
	}
}




	