import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
//reference Display.js for explanation
const CalculatorButton = ({ buttonValue }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
      {buttonValue}
    </button>
  );
};

export default CalculatorButton;
