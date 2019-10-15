import React from 'react';
import { useRoutes } from 'hookrouter';
//==================COMPONENT IMPORTS
import Header from './Header';
import Footer from './Footer';
import Index from './navlinkPages/Index';
import TestPage from './navlinkPages/TestPage';
import Signup from './navlinkPages/Signup';
//==================STYLING IMPORTS
import { BaseLayoutStyles } from './styling/BaseLayoutStyles';

const routes = {
  '/': () => <Index />,
  '/testPage': () => <TestPage />,
  '/Signup': () => <Signup />
}

const BaseLayout = (props) => {
  const routeResult = useRoutes(routes);

  return (
    <BaseLayoutStyles className='wrapper'>
        <Header />
        { routeResult }
        <Footer className='footer'/>
    </BaseLayoutStyles>
  );
};

export default BaseLayout;
