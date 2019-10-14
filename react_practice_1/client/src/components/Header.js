import React from 'react';
import {useRoutes, A} from 'hookrouter';
import { HeaderStyling } from './styling/HeaderStyling';



const Header = () => {
  return (
    <HeaderStyling>
      <A href='/' className='anchorLinkText'>
        Home
      </A>
      <A href='/testPage' className='anchorLinkText'>
        Test Page
      </A>
    </HeaderStyling>
  );
};

export default Header;
