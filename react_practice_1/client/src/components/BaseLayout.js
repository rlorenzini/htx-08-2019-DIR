import React from 'react';
import { withRouter } from 'react-router-dom';
import {useRoutes, A} from 'hookrouter';
//==================COMPONENT IMPORTS
import Header from './Header';
import Index from './navlinkPages/Index';
import TestPage from './navlinkPages/TestPage';
//==================STYLING IMPORTS
import { BaseLayoutStyles } from './styling/BaseLayoutStyles';

const routes = {
  '/': () => <Index />,
  '/testPage': () => <TestPage />
}

const BaseLayout = (props) => {
  const routeResult = useRoutes(routes);

  return (
    <BaseLayoutStyles>
        <Header />
        { routeResult }
      <h1>This Is The Base Layout</h1>
    </BaseLayoutStyles>
  );
};

export default BaseLayout;
