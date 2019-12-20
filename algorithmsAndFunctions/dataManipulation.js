// SORT ARRAY
let array = [1,5,6,87,6,8,90,3]
console.log(array)
// let newArray = []
// console.log(newArray[7])
// console.log(newArray.length)
for (let i = 0; i < array.length - 1; i++) {
  for (let j = i; j < array.length; j++) {
    if (array[j] > array[i]) {
      let t = array[i]
      array[i] = array[j]
      array[j] = t
    }
  }
}

// console.log(array)
// COMBINE ARRAYS
let arr1 = [1,2,3,4]
let arr2 = [1,2,3]
let arr3 = [4,6,7,8]

let mergeArray = []

// for (let i = 0; i < arr1.length; i++) {
//   mergeArray.push(arr1[i])
// }
// for (let i = 0; i < arr2.length; i++) {
//   mergeArray.push(arr2[i])
// }
// for (let i = 0; i < arr3.length; i++) {
//   mergeArray.push(arr3[i])
// }

let merged = arr1.concat(arr2,arr3)
// console.log(arr1)
// console.log(merged)
// GET BETWEEN TWO VALUES OF ARRAY
let bigArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let first = 3
let second = 7

let newBigArray = []

for (let i = first; i <= second; i++) {
  newBigArray.push(bigArray[i])
}

// console.log(newBigArray)
// ADD OBJECT TO OBJECT
let objects = { 1:{key: "value"}, 2:{key: "value"} }
let obj = {name: "potatoes", value: "delicious", type: "all", glory: "To Potatoes"}

objects.new = obj
// console.log(objects)
// REMOVE OBJECT VALUE
console.log(obj)
// Object.keys
delete obj.name
console.log(obj)

let potatoes = Object.keys(obj)
let glory = "glory"
console.log(potatoes)

console.log(potatoes.splice(0, potatoes.indexOf(glory)))

// CRAZY THING

let crazy = 'GloryToPotatoes({"key":"value"})'

let crazyArray = crazy.split('')

let splicedDigit = crazyArray.indexOf('(')
let poppedDigit = crazyArray.lastIndexOf(')')

crazyArray.splice(0, splicedDigit + 1)
crazyArray.pop(poppedDigit)

let notCrazyArray = crazyArray.join('')

let finalObject = JSON.parse(notCrazyArray)

console.log(finalObject)
