/*Write a function createMultiplier that takes a number factor and returns a new function.
That function should take another number and return it multiplied by the factor.
📝 Requirements:

    Use a closure to capture the factor
    The returned function should accept one argument
    Do not use global variables
*/

function createMultiplier(factor){

return function multiply(number)
{
  return number*factor;

}
}
const counter= createMultiplier(10);

console.log(counter(2));


/*Write a function once(fn) that takes a function fn and returns a new function.
The returned function should call fn only once, no matter how many times it's invoked.
After the first call, all subsequent calls should return undefined and not invoke fn.
📝 Requirements

    Use a closure to keep track of whether fn has already been called.
    The returned function should:
        Call fn only on the first invocation.
        Ignore or return undefined on all future calls.
    The original fn may take any number of arguments.
    */
 
  
function once(fn) {
  let called = false;   
  return function(...args) {
    if (!called) {
      called = true;
      return fn(...args); 
    }     
    return undefined; 
  }
}
 function sum(a,b){
  return a+b;
 }
 const addonce=once(sum);
 console.log(addonce(2,3));
 console.log(addonce(2,3));
 console.log(addonce(2,3));





    /*Exercise 1: Factorial

These exercises will help you understand and master recursion in JavaScript — solving problems by having a function call itself.
✅ Instructions

    Do not use loops (for, while, etc.)
    Each solution must use pure recursion
    Focus on defining a base case and a recursive case
    Use console.log() to test your results
*/
function Factorial(n) {
  if (n <= 1) return 1;

  return  n * Factorial(n - 1);
}

console.log(Factorial(6));


