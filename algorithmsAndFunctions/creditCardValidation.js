function CardChecker(num) {
  //turn the number entered into a string
  let ccnum = num.toString();
  console.log(ccnum.slice(0,4))

  //start at index 0, length 1, take that value
  let firstDigit = parseInt(ccnum.slice(0,1));

  //start at index 0, length of 2, take those values out
  let firstTwoDigits = parseInt(ccnum.slice(0,2));

  //start at index 0, length 4, take those values out
  let firstFourDigits = parseInt(ccnum.slice(0,4));

  //check if length is 16
  if (ccnum.length == 16) {
    //if length is 16 and first 4 digits are 6011
    if (firstFourDigits == '6011') {
      return "Valid Discover Card"
    } else if (ccnum.slice(0,1) == '4') {
      //if length is 16 and first digit is 4
      return "Valid Visa"
    } else if (firstTwoDigits <= 55 && firstTwoDigits >= 50) {
      //if length is 16 and first two are between 50 and 55
      return "Valid Mastercard"
    }
  } //end of length 16

  else if (num.toString().length == 15) {
    //if length is 15 and first 2 digits are 37 or 34
    if (firstTwoDigits == '37' || '34') {
      return "Valid American Express"
    } else {
      //if entered number doesnt meet requirements, card is not valid
      return "Invalid card"
    }
  }//end of length 15
}; //end of CardChecker()

let discoverCard = 6011123412341234
let masterCard = 5312123412341234
let visaCard = 4123123412341234
let americanExpress = 371212341234123

console.log(CardChecker(discoverCard));
console.log(CardChecker(masterCard));
console.log(CardChecker(visaCard));
console.log(CardChecker(americanExpress));


//normally youd check with a regular expression (RegEx)
//this is a demonstration of using basic algorithms and concepts to create
//functions for real life applications


// this regex that matches Visa, MasterCard, American Express, Diners Club, Discover, and JCB cards:

// ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$

//quicker, easier, and faster than a nested conditional statement 
