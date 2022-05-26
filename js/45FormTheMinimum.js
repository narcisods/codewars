console.log('codewars')
// 5.26 

// Kyu 7
// Form The Minimum
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

//Details
// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications





//PREP
//PARAMETER: What can you take in?
    // An array of positive integers
//RETURNS: How? print to console? Return?
    // Return 1 number
//EXAMPLES: Examples of how the code should work?
    // 1,3,1 => 13
//PSEDUO CODE: Write pseduo code for everything
    //sort array
    //remove duplicates
    //join array and turn into number


// My Solution
const minValue = value => Number([...new Set(value.sort((a,b)=> a - b, 0))].join(''))


// Codewars Solution 

function minValue(values){
    let arr = Array.from(new Set(values))
    return parseInt(arr.sort().join(''))
  }