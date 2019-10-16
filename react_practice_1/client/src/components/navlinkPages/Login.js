import React from 'react';
import useSignUpForm from '../Hooks/CustomHooks';
import { SignupStyling } from '../styling/SignupStyling';

const Signup = () => {

  const handleSubmitLogin = () => {

    fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: inputs.username,
        password: inputs.password
      })
    }).then(response =>
      response.json()).then(json => {
        if (json.status === 200) {
          // set localStorage of json web token 
          alert("status is 200! yay!")
        } else if (json.status === 500) {
          alert(json.message)
        }
      }).catch((error) => {
        console.log(error)
      }) //end of promise and catch
  };
  //initializing the custom hook
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(handleSubmitLogin);

  return (
    <SignupStyling>
      <form onSubmit={handleSubmit}>
        <div id='SignupMainText'>Login</div>
        <div>
          <label className='SignupFormLabel'>Username</label>
          <input className='SignupInputForms' onChange={handleInputChange} value={inputs.username} type='text' name='username' required/>
        </div>
        <div>
          <label className='SignupFormLabel'>Password</label>
          <input className='SignupInputForms' onChange={handleInputChange} value={inputs.password} type='password' name='password' required/>
        </div>
        <div>
          <button type='submit' id='SignupButton'>Login</button>
        </div>
      </form>
    </SignupStyling>
  );
};

export default Signup;
