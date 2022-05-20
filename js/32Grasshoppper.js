console.log('codewars')
// 5.20.22

// 8Kyu
// Grasshopper - Check for factor

// https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript

//Details

// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.


//PREP
//PARAMETER: What can you take in?
    //  Take in 2 integers
//RETURNS: How? print to console? Return?
    // Return a boolean 
//EXAMPLES: Examples of how the code should work?
    // 10,2 => true
//PSEDUO CODE: Write pseduo code for everything
    // Check if factor divides into base without leaving a remainder


// My Solution
    const checkForFactor = (base,factor) => base % factor === 0
    console.log(checkForFactor(10,2))
// Codewars Solution 

function checkForFactor (base, factor) {
    return base % factor === 0;
  }