//sum of an array

var nums = ['100','300','400','60','40'];
var sum = 0;

for(var i=0; i < nums.length; i++) {

    sum += parseInt(nums[i]);

}

console.log(sum);

//sum of array using reduce

const arrayz = [29.76, 41.85, 46.5];
const arrayy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function potatoFamine(arr) {
  return arr.reduce(
    function(total, nextNumber) {
      return total + nextNumber
    })
}

console.log(potatoFamine(arrayz))

const potatoes = arrayz.reduce((total, amount) => total + amount);

console.log(potatoes)

//sum of arrays in array and organized by least to greatest

var tomatoes = [
[1, 3, 4],
[2, 4, 6, 8],
[3, 6] ];

console.log(tomatoes)

function sortArrays() {

  var i;
  var newArray = [];

  for (i = 0; i < tomatoes.length; i++) {

    frogs = tomatoes[i].reduce((total, amount) => total + amount)
    newArray.push(frogs)

  }
  // newArray.push(frogs)
  console.log(newArray)

  newArray.sort((a, b) => a - b)

  console.log(newArray)
}

sortArrays();
