// HARD
// given a json object, remove the beginning and end and return a new object
// GloryToPotatoes({ key:value })
// array = GloryToPotatoes.split('') => splice = array.indexOf('('); pop = array.lastIndexOf(')');
// newArray.splice(0, splice + 1); string = newArray.join(''); JSON.parse(string)

// EASY
// sort an arry [1,2,3,4,5,6] = [6,5,4,3,2,1]
// sort((a,b) => return b - a)

// MEDIUM
// give two index values, find all properties between them
// 5, 10 array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14] = [6,7,8,9,10,11]
// array.slice(array.indexOf(5), array.indexOf(6) + 1)
// slice(index to start at, index to end at but not include)

// EASY
// {{ key,value },{ key:value }} add a new object
// myOBjectOFObjects = Object.assign({ key: value })

// MEDIUM
// remove all objects that do not match the given key
// stuff = { brand: potato, color: blue, word: yes, no: maybe }; prop = no
// newStuff = Object.keys(car).reduce((object, key) => {
//    if (key !== prop) { object[key] = stuff[key] }
// return object
//})

// EASY
// merge three arrays
// arr1.concat(arr2, arr3)
