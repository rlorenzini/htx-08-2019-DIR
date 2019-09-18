import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
//reference Display.js for explanation
const EqualButton = () => {
  const { doMath } = useContext(NumberContext);
  return (
    <button type="button" className="white-button" onClick={() => doMath()}>
      =
    </button>
  );
};

export default EqualButton;
