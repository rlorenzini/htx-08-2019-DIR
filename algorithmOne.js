// function pythagorean(a,b) {
//     return a*a + b*b
// }
//
// console.log(pythagorean(5,12))
//
// function isItPythag(a,b) {
//     return Math.sqrt(pythagorean(a,b))
// }
//
// console.log(isItPythag(5,12))

// string1 = "apples"
// string2 = "pineapples"
//
// function compare() {
//   let arr1 = string1.split("")
//   let arr2 = string2.split("")
//   const finalArr = []
//   arr1.forEach((e1) => arr2.forEach((e2) => {
//     if(e1===e2){
//       finalArr.push(e1)
//     }
//   }))
//   return finalArr
// }
//
// console.log(compare())

function compare2(a,b) {
  return document.getElementById("answer").innerHTML = a*a + b*b
}

// document.getElementById("answer").innerHTML = compare2(3,4);
