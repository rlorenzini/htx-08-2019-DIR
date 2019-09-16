import React, { useState } from "react";
import useTSForm from './useTSForm';

const TwoStrings = () => {
  //this code is ugly and i apologize

  const compareStrings = () => {
    let str1arr = inputs.firstInput.split('')
    let str2arr = inputs.secondInput.split('')
    let answer = str1arr.filter(x => str2arr.includes(x));
    function symmetricDifference(a1, a2) {
      var result = [];
      for (var i = 0; i < a1.length; i++) {
        if (a2.indexOf(a1[i]) === -1) {
          result.push(a1[i]);
        }
      }
      for (i = 0; i < a2.length; i++) {
        if (a1.indexOf(a2[i]) === -1) {
          result.push(a2[i]);
        }
      }
      return result;
    }
    return(alert(`What's the same: ${answer}; What's different: ${symmetricDifference(str1arr,str2arr)}.`))
  } //end compareStrings


  const {inputs, handleInputChange, handleSubmit} = useTSForm(compareStrings);
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Input</label>
        <input type="text" name="firstInput" required onChange={handleInputChange} value={inputs.firstInput}/>
        <label>Second Input</label>
        <input type="text" name="secondInput" required onChange={handleInputChange} value={inputs.secondInput}/>
      </div>

      <button type="submit">Compare</button>
    </form>
  )//end return
} //end TwoStrings


export default TwoStrings;
