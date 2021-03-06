import React, { useState } from 'react';
import { A } from 'hookrouter';
import { HeaderStyling } from './styling/HeaderStyling';



const Header = (props) => {
  const [ location, setLocation ] = useState(props);
  return (
    <HeaderStyling>
      <A href='/' className='anchorLinkText'>
        Home
      </A>
      <A href='/signup' className='anchorLinkText'>
        Signup
      </A>
      <A href='/login' className='anchorLinkText'>
        Login
      </A>
      <A href='/testPage' className='anchorLinkText'>
        Test Page
      </A>
    </HeaderStyling>
  );
};

export default Header;
