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
// Recursive Output ->
// Exit Output ->

function recursiveReverseString(string) {
  //Base case -> Exit Condition
  if (string.length === 0) {
    return "";
  }

  //Recursive case
  return recursiveReverseString(string.substr(1)) + string.charAt(0);
}

// Exercise

// Input ->
// Exit Case ->
// Recursive Input ->
// Recursive Output ->
// Exit Output ->
