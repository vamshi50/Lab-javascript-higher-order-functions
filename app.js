
var modifiedFood = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
console.log(modifiedFood.slice(2,4));  

var modifiedFood = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
modifiedFood.splice(1, 0, 'noodles');
modifiedFood.splice(1, 0, 'icecream');
console.log(modifiedFood);

var numberArray = [12,324,213,4,2,3,45,4234];
undefined
function iseven(numberArray)
{
    var result = numberArray.filter(numberArray => numberArray%2 == 0);
    return result;
}
console.log(iseven(numberArray));
 

function isPrime(arr) {
  let primenumbers = "The prime numbers are: " + arr.filter((number) => {

      for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
      }
      return true;
  });
  return primenumbers;
}
console.log(isPrime(numberArray));


function nonPrime(arr) {
  let nonPrimenumbers = "The Non-prime numbers are: " + arr.filter((number) => {

      for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return true;
      }
      return false;
  });
  return nonPrimenumbers;
}
console.log(nonPrime(numberArray));


function isEven(num) {
    return num.filter((n) => n % 2 == 0);
  }
  console.log("Even Number by Lambda Expression: " + isEven(numberArray));



var myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray)
{
    var map1 = myArray.map(x => x * x);
    return map1;
}
console.log(map1);


const numbers = [2, 3, 5, 10];
function multiply(myArray) {
  return myArray.reduce(function (initial, item) {
    return initial * item;
  }, 1);
}
console.log("Multiplication=>" + multiply(numbers));
  
let newArray = myArray.map(function findSquareOfNumbers(myArray) {
  return (myArray * myArray);
}).reduce(function multiply(initial, myArray) {
  return (initial * myArray);
}, 1);
console.log("Using Map and reduce=> "+newArray);
