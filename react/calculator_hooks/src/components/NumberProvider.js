import React, { useState } from 'react';

export const NumberContext = React.createContext();
//NumberContext is now capable of acting as a Provider
//this allows state management WITHOUT Redux
//anything in your Provider gets passed to ALL its children
//putting your Provider in your App.js/index.js as a parent sets up your entire page to use said values

const NumberProvider = props => {
  //this.state.number, setNumber sets the state of number, initial state set to ''
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
  const [functionType, setFunctionType] = useState('');

  const handleSetDisplayValue = num => {
    if ((!number.includes('.') || num !== '.' && number.length < 8)) {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
    //set this.state.number to number
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setFunctionType('');
    //clearing states
  };

  const handleBackButton = () => {
    if (number !== '') {
      //if number is not already empty
      const deletedNumber = number.slice(0, number.length - 1);
      //remove last stored value in number array
    }
  };

  const handleSetCalcFunction = type => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
      //if number is not stored, run function and store number
    }
    if (storedNumber) {
      setFunctionType(type);
      //if number is stored, run function type
    }
  };

  const handleToggleNegative = () => {
    //like the other functions we specify if the number is stored or not
    //then we specify if the number is positive or negative and swap the value
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        //we remove the - digit from the number with slice
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };

  const doMath = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case '+':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
          break;
        case '-':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '/':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        case '*':
          setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`);
          break;
        default:
          break;
      }
      setNumber('');
      //after funciton, set number to empty
    }
  };
  //time to pass all functions and states into our provider
  //any components nested inside NumberContext will inherit all the values we list without needing Redux
  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleToggleNegative,
        number,
        storedNumber,
        setNumber
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
