import React, { useState } from 'react';

const useSignUpForm = (callback) => {

  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    };
    callback();
  };

  const handleInputChange = (event) => {

    event.persist();

    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };
  //returning which parts of the custom hook can be called
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};

export default useSignUpForm;
