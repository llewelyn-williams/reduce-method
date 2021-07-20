  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Reduce reduces vales in an array to a single value.
// acc stands for "accumulator"
// curr staand for "currentValue"

// .reduce requires those above two as paramaters in 
// its callback function.

// By default the acc will initialise with the first element
// of the Array, e.g. nums[0]
// This in turn means that the accumilation process (and 
// therefore the curr) starts with the second elment in the
// array e.g nums[1]

// Therefore the first pass produces this result in the example
// without specifying and initialValue
// Accumulator:  0 Current value:  1 Total:  1

// However you can specify an inital value for the acc
// as a parameter after the callback function.

// Specifying stops acc using the first value of the array
// and forces it to use the specified value instead, leaving
// the first value free to be used by curr.

// In the below example spcifying an initialValue of 10
// results in an output of 20 (after five passes)

// Summing an array of numbers:

// const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// Tidy version commented out above.

const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
  console.log(
    "Accumulator: ", acc, 
    "Current value: ", curr, 
    "Total: ", acc + curr
  );
  return acc + curr;
}, 10);
console.log(sum);



const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
