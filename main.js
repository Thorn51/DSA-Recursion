//Sum numbers from start to end of list-.
function recursiveSumOf(list) {
  debugger;
  if (list.length === 1) {
    return list[0];
  } //escape-.
  let listTail = list.slice(1); //slice from 1 to end-.
  let sum = list[0] + recursiveSumOf(listTail); //recursion-.
  return sum;
}

let testList = [2, 4, 6, 8, 10];

// Exercise 1 -> Counting Sheep

// Input -> number of sheep (n)
// Exit Case -> n === 0
// Recursive Input -> ${n}-1
// Recursive Output -> n: + Another sheep jumps over the fence
// Exit Output -> All of the sheep jumped over the fence

function recursiveCountSheep(n) {
  //Base Case -> Exit condition
  if (n === 0) {
    return console.log("All of sheep jumped over the fence.");
  }

  //Recursive Case
  console.log(`${n}: Another sheep jumps over the fence`);
  recursiveCountSheep(n - 1);
}

// Exercise 2 -> Power Calculator

// Input -> base(integer), power(integer)
// Exit Case -> power === 0
// Recursive Input -> base, power-power
// Recursive Output -> base^power
// Exit Output -> None

function recursivePowerCalculator(base, power) {
  //Return if power parameter is negative
  if (power < 0) {
    return `Exponent should be >= 0`;
  }

  //Base condition -> Exit condition
  if (power === 0) {
    return console.log("Calculation finished");
  }

  //Recursive Case
  recursivePowerCalculator(base, power - power);
  let result = base ** power;
  return `${base}^${power} = ${result}`;
}

// Exercise 3 Reverse String

// Input -> String
// Exit Case -> string.length === 0
// Recursive Input -> newString
// Recursive Output -> Reverse order of string
// Exit Output -> none

function recursiveReverseString(string) {
  //Base case -> Exit Condition
  if (string.length === 0) {
    return "";
  }

  //Recursive case
  return recursiveReverseString(string.substr(1)) + string.charAt(0);
}

// Exercise 4 -> nth Triangular Number

// Input -> integer n
// Exit Case -> n <= 1
// Recursive Input -> n - 1
// Recursive Output -> nth triangular number
// Exit Output -> 1

function recursiveNthTriangularNumber(n) {
  //Base Case -> Exit Condition
  if (n <= 1) {
    return 1;
  }

  //Recursive Case
  return n + recursiveNthTriangularNumber(n - 1);
}

// Exercise 5 -> String Splitter

// Input -> string, character
// Exit Case -> string.length === 0
// Recursive Input ->
// Recursive Output ->
// Exit Output ->

function recursiveStringSplitter(string, character, splitString = []) {
  //Base Case -> Exit condition
  if (string.length === 0) {
    return splitString;
  }
  // Recursive case
  const indexOfCharacter = string.indexOf(character);

  if (indexOfCharacter !== -1) {
    splitString.push(string.slice(0, indexOfCharacter));
    let newString = string.substring(indexOfCharacter + 1);
    return recursiveStringSplitter(newString, character, splitString);
  } else {
    let length = string.length;
    splitString.push(string.slice(0, length));
    return recursiveStringSplitter("", length, splitString);
  }
}

// Exercise 6 -> Fibonacci

// Input -> result(arr) first numbers in sequence(0,1), len(integer) length of sequence
// Exit Case -> result.lenght >= len + 1
// Recursive Input -> result, len
// Recursive Output -> Updated result
// Exit Output -> final result containing Fibonacci sequence

function recursiveFibonacci(result, len) {
  //Base Case -> Exit Condition
  if (result.length >= len + 1) {
    return result;
  }

  result.push(result[result.length - 2] + result[result.length - 1]);
  // Recursive Case
  return recursiveFibonacci(result, len);
}

// Exercise 7 -> Factorial

// Input -> total running total of factorial, number(integer)
// Exit Case -> number === 0
// Recursive Input -> result, number
// Recursive Output -> result.push(n-1), number
// Exit Output -> factorial of given number

function recursiveFactorial(total = 0, n) {
  //Base Case -> Exit Condition
  if (n === 1) {
    return total;
  }
  //Recursive Case
  if (total === 0) {
    total = n * (n - 1);
  } else {
    total = total * (n - 1);
  }

  return recursiveFactorial(total, n - 1);
}

// Exercise

// Input ->
// Exit Case ->
// Recursive Input ->
// Recursive Output ->
// Exit Output ->
