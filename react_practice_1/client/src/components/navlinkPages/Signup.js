import React from 'react';
import useSignUpForm from '../Hooks/CustomHooks';
import { SignupStyling } from '../styling/SignupStyling';

const Signup = () => {

  const handleSubmitSignup = () => {
    if (inputs.password1 === inputs.password2) {
    fetch('http://localhost:8080/Signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password1,
        email: inputs.email
      })
    })
    }//end of if p1 === p2
    else {
      alert(`Your passwords did not match. Try again.`)
    }
  };
  //initializing the custom hook
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(handleSubmitSignup);
  // console.log(inputs)
  return (
    <SignupStyling>
      <form onSubmit={handleSubmit}>
        <div id='SignupMainText'>Signup</div>
        <div>
          <label className='SignupFormLabel'>Username</label>
          <input className='SignupInputForms' onChange={handleInputChange} value={inputs.username} type='text' name='username' required/>
          <label className='SignupFormLabel'>Email</label>
          <input className='SignupInputForms' onChange={handleInputChange} value={inputs.email} type='email' name='email' required/>
        </div>
        <div>
          <label className='SignupFormLabel'>Password</label>
          <input className='SignupInputForms' onChange={handleInputChange} value={inputs.password1} type='password' name='password1' required/>
        </div>
        <div>
          <label className='SignupFormLabel'>Re-Enter Password</label>
          <input className='SignupInputForms' onChange={handleInputChange} value={inputs.password2} type='password' name='password2' required/>
        </div>
        <div>
          <button type='submit' id='SignupButton'>Signup</button>
        </div>
      </form>
    </SignupStyling>
  );
};

export default Signup;
