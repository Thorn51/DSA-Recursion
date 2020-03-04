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

//Exercise 1 -> Counting Sheep
//Input -> number of sheep
// Output -> number of sheet + message
// Recursive Input -> Number of sheep -1
//

function recursiveCountSheep(n) {
  //Base Case -> Exit condition
  if (n === 0) {
    return "All of sheep jumped over the fence.";
  }

  //Recursive Case
  return (
    `${n}: Another sheep jumps over the fence` + recursiveCountSheep(n - 1)
  );
}
