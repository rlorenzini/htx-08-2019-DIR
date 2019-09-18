import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
//our NumberContext.Provider passes values to children
//we import those values as if we are importing the component itself
//useContext is linked to React.createContext
//createContext lets the Provider pass values, useContext lets the children use the values

//unicode is used for displaying buttons 
import { DisplayStyles } from './styling/Styles';

const Display = () => {
  const { number, storedNumber, functionType } = useContext(NumberContext);
  //now when we refer to these variables our component will check NumberContext
  //for the value/functionality of the NumberContext component
  return (
    <DisplayStyles>
      <h2 className={storedNumber && storedNumber.length > 12 ? 'long-main-display' : undefined}>
        {!number.length && !storedNumber ? '0' : number || storedNumber}
      </h2>
      <p className={storedNumber && storedNumber.length > 12 ? 'long-stored-display' : undefined}>
        {!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}
      </p>
    </DisplayStyles>
  );
};
//if the length of the display is more than 12 use the long-main-display className
//else leave the className empty and inherit the default styling

//if no stored number display text
//else display in this order: stored, operand, new number
export default Display;
