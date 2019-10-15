import React from 'react';
import { A } from 'hookrouter';
import { FooterStyling } from './styling/FooterStyling';

//  <FooterStyling> </FooterStyling>

const Footer = () => {
  return (
    <FooterStyling className='footer push'>
      <A href='/aboutus' className='anchorLinkText'>
        Home
      </A>
      <A href='/contactus' className='anchorLinkText'>
        Login
      </A>
    </FooterStyling>
  );
};

export default Footer;
