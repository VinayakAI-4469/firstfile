// 1. Declare a name
let name = "John";

// 2. Create an array of numbers
let numbers = [10, 25, 30, 5, 8];

// 3. Function to calculate the sum of numbers in the array
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// 4. Calculate the sum
let totalSum = calculateSum(numbers);

// 5. Check if the sum is even or odd
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

let result = checkEvenOrOdd(totalSum);

// Output results
console.log("Name:", name);
console.log("Numbers:", numbers);
console.log("Sum of numbers:", totalSum);
console.log("The sum is", result);
