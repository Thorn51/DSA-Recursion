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

//Input -> number of sheep (n)
//Exit Case -> n === 0
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
