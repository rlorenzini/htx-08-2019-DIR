import React from 'react';
import useSignUpForm from '../Hooks/CustomHooks';
// import LoginStyling from '../styling/LoginStyling';

const Login = () => {
  //initializing the custom hook

  const signup = () => {
    alert(`User Created!
           Name: ${inputs.firstName} ${inputs.lastName}
           Email: ${inputs.email}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);

  return (
    <span>
      <form onSubmit={handleSubmit}>
        <div id='loginMainText'>Login</div>
        <div>
          <label className='loginFormLabel'>Username</label>
          <input onChange={handleInputChange} value={inputs.username} type='text' name='username' required/>
          <label className='loginFormLabel'>Email</label>
          <input onChange={handleInputChange} value={inputs.email} type='email' name='email' required/>
        </div>
        <div>
          <label className='loginFormLabel'>Password</label>
          <input onChange={handleInputChange} value={inputs.password1} type='password' name='password1' required/>
        </div>
        <div>
          <label className='loginFormLabel'>Re-Enter Password</label>
          <input onChange={handleInputChange} value={inputs.password2} type='password' name='password2' required/>
        </div>
        <div>
          <button type='submit' id='loginButton'>Login</button>
        </div>
      </form>
    </span>
  );
};

export default Login;
