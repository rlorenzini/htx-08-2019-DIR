import React from 'react';
import { A } from 'hookrouter';
import { HeaderStyling } from './styling/HeaderStyling';



const Header = () => {
  return (
    <HeaderStyling>
      <A href='/' className='anchorLinkText'>
        Home
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
