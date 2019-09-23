//Challenge 1
//Collatz Conjecture

function collatz(num) {
  if(num < 1) {
    return "error: number must be poitive"
  };
  let collatzArray = [];
  while(num > 1) {
    num % 2 === 0 ? num = num / 2 : num = (num*3) + 1
    collatzArray.push(num)
    //if num is divisible by 2, then (?) divide num by two
    //else (:) multiple num by 3 and add 1
  };
  return collatzArray
};
console.log(collatz(17));
//end Challenge 1

//Challenge 2
//Palindrome
//regex is used to check strings for specific characters and can be used
//to replace those digits with other digits (check ASCII)
function palindromeWithRegex(str) {
  var regex = /[\W_]/g;

  var lowRegStr = str.toLowerCase().replace(regex, '');

  var reverseStr = lowRegStr.split('').reverse().join('');

  return reverseStr === lowRegStr;
};

console.log(palindromeWithRegex('A man, a plan, a canal. Panama'));
console.log(palindromeWithRegex('this is not a palindrome'));

//without regex, this function cannot calculate spaces, commas, etc
//but smart functions make it quick and easy
function palindromeWithoutRegex(str) {
   return str == str.split('').reverse().join('');
};

console.log(palindromeWithoutRegex('racecar'));

//this is what it looks like without using smart functions
function palindromeWithoutSmartFunctions(str, i) {
  return (i=i||0)<0||i>=str.length>>1||str[i]==str[str.length-1-i]&&isPalindrome(str,++i);
  //this is a single like if then conditional statement using logical operators
  //looks like a mess
};

console.log(palindromeWithoutSmartFunctions('this is not a palindrome'));

//palindome with a for loop
function palindromeForLoop(str) {
  var len = Math.floor(str.length / 2);
  for (var i = 0; i < len; i++)
    if (str[i] !== str[str.length - i - 1])
      return false;
  return true;
};

console.log(palindromeForLoop('tacocat'));
//end Challenge 2

//Challenge 3
//Euler's Number

function eulerProblem() {
  for(var i = 20; i <= 10000000000000; i++) {
    var found = true;
    for(var e = 2; e <= 20; e++){
        if (i % e != 0) {
            found = false;
            break; // stop testing other divisors
        };
    };
    if (found) {
        return i;
    };
  };
};
//i % e != 0 is checking every number from e = 2 until e = 20
//if i is evenly divisible by e, go to next iteration of e
//else, return false and try next number
//we limit i to 10000000000000 to keep our loop for going infinite incase
//our logic in the function is wrong/doesn't break when supposed to

console.log(eulerProblem())
//end Challenge 3
