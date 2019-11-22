import React from 'react';
import './App.css';
import BaseLayout from './components/BaseLayout';

//App is holding BaseLayout
//Provider is passing the store to App
//App is passing the store to BaseLayout

function App() {
  return (
    <div className="App">
      <BaseLayout />
    </div>
  );
}

export default App;
