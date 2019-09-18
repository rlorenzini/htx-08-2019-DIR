import React from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';

//check documentation under NumberProvider.js and Display.js for more detail
//Calculator inherits all values from NumberProvider, including states and functions, without Redux using createContext and useContext 
const App = () => (
  <NumberProvider>
    <Calculator />
  </NumberProvider>
);

export default App;
